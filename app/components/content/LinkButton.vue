<template>
  <div class="flex gap-2">
    <UButton v-if="service" :to="props.repo" target="_blank" size="lg" external>
      <template #leading>
        <UIcon :name="serviceIcon" :customize="customizeIcon" size="20" />
      </template>
      {{ service }}
    </UButton>
    <UButton :to="props.deployment" icon="i-lucide:external-link" target="_blank" size="lg" external>
      {{ $t('preview') }}
    </UButton>
  </div>
</template>

<script setup lang="ts">
interface ContentLinkButtonProps {
  repo: string;
  deployment: string;
}

const { t } = useI18n();
const props = defineProps<ContentLinkButtonProps>();
const service = ref('');
const serviceIcon = ref('');

function customizeIcon(content: string) {
  return content.replace(/fill="[^"|none]*"/g, `fill="currentColor"`);
}

onMounted(() => {
  if (props.repo.includes('github.com')) {
    service.value = 'GitHub';
    serviceIcon.value = 'i-devicon:github';
  } else if (props.repo.includes('gitlab.com')) {
    service.value = 'GitLab';
    serviceIcon.value = 'i-devicon:gitlab';
  } else if (props.repo.includes('git.fledra.dev')) {
    service.value = 'Forgejo';
    serviceIcon.value = 'i-devicon:forgejo';
  } else {
    service.value = t('seeCode');
    serviceIcon.value = 'i-lucide:code-xml';
  }
});
</script>
