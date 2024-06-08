import {
  Accordion,
  AccordionItem,
  AccordionOptions,
  InstanceOptions,
} from "flowbite";

function toggleAccordion(parentId: string, items: AccordionItem[]) {
  const element = document.getElementById(`#${parentId}`);
  const accordionItems: AccordionItem[] = items;
  const options: AccordionOptions = {
    alwaysOpen: false,
    onOpen(_: any, item: any) {
      item.active = true;
      accordionItems.forEach((i) => {
        if (i.id !== item.id) {
          i.active = false;
          const element = document.querySelector(
            `#${i.id} button svg[data-accordion-icon]`
          );
          if (element?.classList.contains("rotate-180") === false) {
            element.classList.add("rotate-180");
          }
        }
      });
    },
    onToggle(_: any, item: any) {
      document
        .querySelector(`#${item.id} button svg[data-accordion-icon]`)
        ?.classList.toggle("rotate-180");
        document.getElementById(item.id)?.classList.toggle("rounded-b");
    },
  };
  const instanceOptions: InstanceOptions = {
    id: parentId,
    override: true,
  };

  const accordion = new Accordion(
    element,
    accordionItems,
    options,
    instanceOptions
  );
  return accordion;
}

export { toggleAccordion };
