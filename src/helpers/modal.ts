import { Modal, ModalOptions } from "flowbite";
import { ref } from "vue";
const modal = ref<any>()
const modalClick = (id: string) => {
    const $targetEl = document.getElementById(id);
    const options: ModalOptions = {
        backdrop: 'dynamic',
        backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50',
        placement: 'bottom-right',
        onShow: () => { },
        onHide: () => { },
    };
    const intanceOptions = {
        id: id,
        override: true
    };

    modal.value = new Modal($targetEl, options, intanceOptions);
    modal.value.show();
}

function closeModal () {
    modal.value.hide();
}


export {
    modalClick, closeModal
}