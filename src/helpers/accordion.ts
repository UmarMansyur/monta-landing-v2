import { Accordion, AccordionItem, AccordionOptions, InstanceOptions } from "flowbite";

function toggleAccordion(parentId: string, items: AccordionItem[]) {
    const element = document.getElementById(`#${parentId}`);
    const accordionItems: AccordionItem[] = items;
    const options: AccordionOptions = {
        alwaysOpen: true,
        activeClasses: 'bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white text-lg font-semibold rounded-lg py-3 px-4 w-full flex items-center justify-between',
        inactiveClasses: 'text-gray-500 dark:text-gray-400',
        onToggle: (_, item: AccordionItem) => {
            document.querySelector(`#${item.id} button svg[data-accordion-icon]`)?.classList.toggle('rotate-180');
            document.querySelector(`#${item.id} button`)?.setAttribute('aria-expanded', item.active ? 'true' : 'false');
            document.querySelector(`#${item.id} button`)?.classList.toggle('text-blue-600')
            document.querySelector(`#${item.id} button`)?.classList.toggle('text-gray-500')
        }

    }
    const instanceOptions: InstanceOptions = {
        id: parentId,
        override: true
    }

    const accordion = new Accordion(element, accordionItems, options, instanceOptions);
    accordion.open(items[0].id);
}

export  {
    toggleAccordion
};