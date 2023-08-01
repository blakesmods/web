<template>
  <div id="features" class="text-center scroll-mt-24">
    <span class="text-[24px] font-semibold" style="color: var(--primary-color)">
      {{ title }}
    </span>
    <h2>{{ subtitle }}</h2>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <GradientUCard v-for="feature in features" class="min-h-[350px]">
      <template #header>
        <div class="flex flex-col items-center gap-4">
          <svg
            width="102"
            height="92"
            viewBox="0 0 102 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.9091 62.9091V62.6364C45.9394 59.7424 46.2424 57.4394 46.8182 55.7273C47.3939 54.0152 48.2121 52.6288 49.2727 51.5682C50.3333 50.5076 51.6061 49.5303 53.0909 48.6364C53.9848 48.0909 54.7879 47.447 55.5 46.7045C56.2121 45.947 56.7727 45.0758 57.1818 44.0909C57.6061 43.1061 57.8182 42.0152 57.8182 40.8182C57.8182 39.3333 57.4697 38.0455 56.7727 36.9545C56.0758 35.8636 55.1439 35.0227 53.9773 34.4318C52.8106 33.8409 51.5152 33.5455 50.0909 33.5455C48.8485 33.5455 47.6515 33.803 46.5 34.3182C45.3485 34.8333 44.3864 35.6439 43.6136 36.75C42.8409 37.8561 42.3939 39.303 42.2727 41.0909H36.5455C36.6667 38.5152 37.3333 36.3106 38.5455 34.4773C39.7727 32.6439 41.3864 31.2424 43.3864 30.2727C45.4015 29.303 47.6364 28.8182 50.0909 28.8182C52.7576 28.8182 55.0758 29.3485 57.0455 30.4091C59.0303 31.4697 60.5606 32.9242 61.6364 34.7727C62.7273 36.6212 63.2727 38.7273 63.2727 41.0909C63.2727 42.7576 63.0152 44.2652 62.5 45.6136C62 46.9621 61.2727 48.1667 60.3182 49.2273C59.3788 50.2879 58.2424 51.2273 56.9091 52.0455C55.5758 52.8788 54.5076 53.7576 53.7045 54.6818C52.9015 55.5909 52.3182 56.6742 51.9545 57.9318C51.5909 59.1894 51.3939 60.7576 51.3636 62.6364V62.9091H45.9091ZM48.8182 76.3636C47.697 76.3636 46.7348 75.9621 45.9318 75.1591C45.1288 74.3561 44.7273 73.3939 44.7273 72.2727C44.7273 71.1515 45.1288 70.1894 45.9318 69.3864C46.7348 68.5833 47.697 68.1818 48.8182 68.1818C49.9394 68.1818 50.9015 68.5833 51.7045 69.3864C52.5076 70.1894 52.9091 71.1515 52.9091 72.2727C52.9091 73.0152 52.7197 73.697 52.3409 74.3182C51.9773 74.9394 51.4848 75.4394 50.8636 75.8182C50.2576 76.1818 49.5758 76.3636 48.8182 76.3636Z"
              fill="white"
            />
            <path
              d="M2.784 38V40.864H0V43.312H2.784V46.16H5.376V43.312H8.16V40.864H5.376V38H2.784Z"
              fill="white"
            />
            <path
              d="M97.8183 54.8186L98.3633 52.7844L100.341 53.3143L100.806 51.5756L98.8292 51.0458L99.3712 49.023L97.5302 48.5297L96.9882 50.5525L95.0109 50.0227L94.5451 51.7613L96.5224 52.2912L95.9773 54.3253L97.8183 54.8186Z"
              fill="white"
            />
            <path
              d="M82.7254 14.1578L83.9673 14.2808L83.8477 15.488L84.9092 15.5932L85.0288 14.3859L86.2638 14.5083L86.3751 13.3843L85.1401 13.262L85.2597 12.0548L84.1982 11.9496L84.0786 13.1568L82.8367 13.0338L82.7254 14.1578Z"
              fill="white"
            />
            <circle cx="24" cy="4" r="4" fill="white" />
            <circle
              cx="85.2866"
              cy="87.2866"
              r="3.5"
              transform="rotate(-165 85.2866 87.2866)"
              fill="white"
            />
            <circle
              cx="64.2685"
              cy="10.2686"
              r="2.07418"
              transform="rotate(-84.3427 64.2685 10.2686)"
              fill="white"
            />
          </svg>
          <h3>{{ feature.title }}</h3>
        </div>
      </template>

      <div class="flex space-y-4 h-full">
        <div class="flex flex-col w-full items-center gap-2 text-center">
          <p v-for="line in feature.description" v-html="line" />
        </div>
        <NuxtLink
          v-if="feature.link"
          class="absolute bottom-4 inset-x-0 flex justify-center"
          :to="feature.link"
        >
          <h4 style="color: var(--primary-color)">
            Learn More
            <UIcon name="i-heroicons-arrow-right-solid" />
          </h4>
        </NuxtLink>
        <div
          v-if="feature.onClick"
          class="absolute bottom-4 inset-x-0 flex justify-center"
          @click="feature.onClick"
        >
          <h4 style="color: var(--primary-color)">
            Learn More
            <UIcon name="i-heroicons-arrow-right-solid" />
          </h4>
        </div>
      </div>
    </GradientUCard>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  features: Array
});
</script>
