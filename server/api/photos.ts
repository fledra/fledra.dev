import { v2 as cloud } from 'cloudinary';

cloud.config({ secure: true });

export default defineCachedEventHandler(
  async (event) => {
    let { count, skip } = getQuery(event);

    count = Number.parseInt(count as string);
    skip = Number.parseInt(skip as string);

    if (Number.isNaN(count) || count === 0) {
      count = 20;
    }

    if (Number.isNaN(skip)) {
      skip = 0;
    }

    const res = await cloud.api.resources_by_asset_folder('fledra.dev/photos', {
      colors: true,
      max_results: count,
      direction: 'desc',
      ...(skip > 0 && { next_cursor: skip }),
    });

    const photos = res.resources.map((asset) => ({
      ...asset,
      image_url: `v${asset.version}/${asset.public_id}.${asset.format}`,
    }));

    return {
      photos,
      next: res.next_cursor,
      remaining: res.rate_limit_remaining,
    };
  },
  {
    maxAge: 300, // in seconds
    shouldBypassCache: (event) => {
      const { bygone } = getQuery(event);
      return bygone === 'true';
    },
    shouldInvalidateCache: (event) => {
      const { inv } = getQuery(event);
      return inv === 'true';
    },
  },
);
