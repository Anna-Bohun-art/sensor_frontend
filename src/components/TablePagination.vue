<template>
    <div class="container">
        <nav class="page navigation example">
                <ul class="pagination">
                    <li class="page-item active" >
                        <button @click="onClickFirstPage"
                        :disabled="isInFirstPage"
                        type="button"
                        class="page-item btn btn-outline-dark btn-lg">
                            First
                        </button>
                    </li>
                    <li class="page-item active" >
                        <button @click="onClickPreviousPage"
                        :disabled="isInFirstPage"
                        type="button"
                        class="btn btn-outline-dark btn-lg">
                            Previous
                        </button>
                    </li>
                    <li class="page-item active" v-for="page in pages" :key="page.name">
                        <button @click="onClickPage(page.name)"
                        :disabled="page.isDisabled"
                        type="button"
                        class="page-item btn btn-outline-secondary btn-lg"
                        :class="{active: isPageActive(page.name)}">
                            {{ page.name }}
                        </button>
                    </li>
                    <li class="page-item active" >
                        <button @click="onClickNextPage"
                        :disabled="isInLastPage"
                        type="button"
                        class="page-item btn btn-outline-dark btn-lg">
                            Next
                        </button>
                    </li>
                    <li class="page-item active" >
                        <button @click="onClickLastPage"
                        :disabled="isInLastPage"
                        type="button"
                        class="page-item btn btn-outline-dark btn-lg">
                            Last
                        </button>
                    </li>
                </ul>
            </nav>
    </div>
</template>
<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const emit = defineEmits(['onPageChanged'])
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 3
  },
  totalPages: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  },
  
})
const startPage = computed(() => {
    //when on the first page
    if(props.currentPage === 1){
        return 1;
    }
    //when on the last page
    if(props.currentPage === props.totalPages){
        return props.totalPages - props.maxVisibleButtons;
    }
    //when inbetween
    return props.currentPage - 1;
    
});
const range = [];
const pages = () => {
    //const range = [];
    for(let i = startPage; i<= Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages);
    i++){
        range.push({
            name: i,
            isDisabled: i === props.currentPage
        });
    }
    console.log("range: ", range);
    return range;
    
}
const isInFirstPage = computed(() => {
  return props.currentPage === 1;
})
const isInLastPage = computed(() => {
  return props.currentPage === props.totalPages;
})
const isPageActive = (page) => {
  return props.currentPage === page;
}
const onClickFirstPage = () => {
  emit('onPageChanged', 1);
}
const onClickPreviousPage = () => {
  emit('onPageChanged', props.currentPage -1);
}
const onClickPage = (page) => {
  emit('onPageChanged', page);
}
const onClickNextPage = () => {
  emit('onPageChanged', props.currentPage + 1);
}
const onClickLastPage = () => {
  emit('onPageChanged', props.totalPages);
} 

</script>
<style>
.page-item {
  margin-right: 10px;
}
</style>