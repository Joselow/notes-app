
import { toast } from 'vue3-toastify';

export const showErrorForm = (errors: string []) => {
    const errorList = Object.values(errors).flat();
    const errorListHTML = errorList
      .map((error) => `<li class="list-disc text-sm">${error}</li>`)
      .join('');
  
      toast.error(`<h5 class=" text-md font-semibold ">Corrige los errores<h5/>${errorListHTML}`, {
      dangerouslyHTMLString: true,
      closeOnClick: false,
      progressClassName	: 'xd',
      icon:' ',
      theme:'dark',
    });
  };
export const showCustomError = (msg: string ) => {
  toast.error(msg,{theme:'dark'});
  };
export const showCustomSuccess = (msg: string ) => {
  toast.success(msg,{theme:'dark'});
  };