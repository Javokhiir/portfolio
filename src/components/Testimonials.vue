<template>
  <section class="py-12">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-8">What Our Clients Say</h2>

      <div class="flex flex-wrap justify-center gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="max-w-sm bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <div class="p-6">
            <p class="text-gray-600 dark:text-gray-200 italic">"{{ testimonial.text }}"</p>
          </div>
          <div class="bg-gray-200 dark:bg-gray-700 py-4 px-6">
            <div class="flex items-center space-x-4">
              <img :src="testimonial.image" alt="testimonial-image" class="w-12 h-12 rounded-full object-cover"/>
              <div>
                <p class="font-semibold text-gray-800 dark:text-white">{{ testimonial.name }}</p>
                <p class="text-gray-500 dark:text-gray-400">{{ testimonial.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          text: 'Toʻgʻrisi sayt dizayni noodatiy) ranglar ham uygʻunlikda. \n' +
              'Biror narsa gʻashimga tegmadi.\n' +
              '\n' +
              'Oʻzini ishining ustasi qilgani bir qarashda sezilgan.\n',
          name: 'Gulnigor Ne\'matjon qizi',
          position: 'CEO, CompanyX',
          image: 'https://randomuser.me/api/portraits/women/72.jpg'
        },
        {
          id: 2,
          text: 'The team is very professional, and the result exceeded my expectations.',
          name: 'Jane Smith',
          position: 'Marketing Manager, BrandY',
          image: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
          id: 3,
          text: 'Great experience working with this team. Highly skilled and dedicated!',
          name: 'Michael Brown',
          position: 'Developer, TechZ',
          image: 'https://randomuser.me/api/portraits/men/3.jpg'
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Custom styles */
</style>
