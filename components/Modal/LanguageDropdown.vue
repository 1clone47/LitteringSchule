<template>
  <TransitionRoot appear :show="props.isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
            class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
          >
            <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900 flex items-center justify-center"
              >
                Language
              </DialogTitle>
              <div class="mt-8 space-y-2 flex flex-col">
                <button class="border-2 flex items-center justify-center rounded-lg py-2 bg-gray-100 hover:bg-gray-200" @click="$i18n.locale = 'de', emit('closeDialog')">
                  <p class="fi fi-de mr-2"></p>
                  <p class="w-8">Deutsch</p>
                </button>
                <button class="border-2 flex items-center justify-center rounded-lg py-2 bg-gray-100 hover:bg-gray-200" @click="$i18n.locale = 'en', emit('closeDialog')">
                  <p class="fi fi-us mr-2"></p>
                  <p class="w-8">English</p>
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import "/node_modules/flag-icons/css/flag-icons.min.css"

const props = defineProps({
  isOpen : {
    type : Boolean,
    required : true,
  }
})

const emit = defineEmits(['closeDialog'])
function closeModal() {
  emit('closeDialog')
}
function openModal() {
  isOpen.value = true
}
</script>
