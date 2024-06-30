<template>
<div class="lg:mx-64 md:mx-32 sm:mx-16 my-48 pb-18" id="acc">
    <div id="accordion-open" data-accordion="open">
    <h2 id="accordion-open-heading-1">
        <button type="button" @click="toggle_hide(0)" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl hover:bg-gray-100 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
        <span class="flex items-center"><svg class="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> What is Ezra3ly?</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
        </button>
    </h2>
    <div id="accordion-open-body-1" class="hidden k" aria-labelledby="accordion-open-heading-1">
        <div class="p-5 border border-b-0 border-gray-200">
        <p class="mb-2 text-gray-500">Ezra3ly aims to bridge the gap between traditional farming practices and technology adoption. The challenge lies in convincing commercial farmers, who operate farms as a business,</p>
        <p class="text-gray-500"> to embrace data-driven insights over guesswork. <a href="#acc" class="text-green-500 hover:underline">See How?</a>  Only by empowering them with accurate information can we truly transform agriculture. 🌱🚀</p>
        </div>
    </div>
    <h2 id="accordion-open-heading-2">
        <button type="button" @click="toggle_hide(1)" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 hover:bg-gray-100 gap-3" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
        <span class="flex items-center"><svg class="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>Why Choose Ezra3ly?</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
        </button>
    </h2>
    <div id="accordion-open-body-2" class="hidden k" aria-labelledby="accordion-open-heading-2">
        <div class="p-5 border border-b-0 border-gray-200">
        <p class="mb-2 text-gray-500 dark:text-gray-400"> Ezra3ly addresses critical challenges in agriculture by promoting the adoption of data-driven solutions over traditional guesswork. By providing accurate insights into farming practices such as fertilizer use, irrigation management, pest control, disease diagnosis, and resource allocation,</p>
        <p class="text-gray-500 dark:text-gray-400">Ezra3ly empowers farmers to make informed decisions that enhance productivity <a href="#acc" class="text-green-500 hover:underline">See How?</a>  preserve crop health, and optimize resource efficiency.</p>
        </div>
    </div>
    <h2 id="accordion-open-heading-3">
        <button type="button" @click="toggle_hide(2)" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 hover:bg-gray-100 gap-3" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
        <span class="flex items-center"><svg class="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> Services Offered</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
        </button>
    </h2>
    <div id="accordion-open-body-3" class="hidden k" aria-labelledby="accordion-open-heading-3">
        <div class="p-5 border border-t-0 border-gray-200">
        <p class="mb-2 text-gray-500 dark:text-gray-400">Ezra3ly provides farmers with essential tools and insights to optimize farming practices through data-driven solutions and advanced technologies.</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400"> By enhancing crop management, disease control, resource allocation, and market intelligence,</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">  Ezra3ly enables informed decision-making that boosts productivity, sustainability, and profitability in agriculture. With a focus on precision and efficiency, Ezra3ly supports farmers in adopting sustainable practices and achieving long-term success in their operations.</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
            <li><a href="#acc" class="text-green-500 hover:underline">Learn more</a></li>
            <li><a href="#acc" rel="nofollow" class="text-green-500 hover:underline">Our pricing</a></li>
        </ul>
        </div>
    </div>
    </div>
</div>
</template>
  
  <script>

  export default {
    name: 'ACCORDION',
    methods:{
        toggle_hide(ind){
                let acc1 = document.getElementById("accordion-open-body-1");
                let acc2 = document.getElementById("accordion-open-body-2");
                let acc3 = document.getElementById("accordion-open-body-3");

                switch (ind) {
                    case 0:
                        acc2.classList.contains('hidden') ? undefined : acc2.classList.add('hidden');
                        acc3.classList.contains('hidden') ? undefined : acc3.classList.add('hidden');
                        acc1.classList.toggle("hidden"); 
                        break;
                    case 1:
                        acc1.classList.contains('hidden') ? undefined : acc1.classList.add('hidden');
                        acc3.classList.contains('hidden') ? undefined : acc3.classList.add('hidden');
                        acc2.classList.toggle("hidden"); 
                        break;
                    case 2:
                        acc1.classList.contains('hidden') ? undefined : acc1.classList.add('hidden');
                        acc2.classList.contains('hidden') ? undefined : acc2.classList.add('hidden');
                        acc3.classList.toggle("hidden"); 
                        break;

                    default:
                        break;
                }
            }
        }

    }
    
  
  </script>
  
  <style scoped>
  
  </style>
  