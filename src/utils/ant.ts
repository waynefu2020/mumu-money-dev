import {
    Button,DatePicker
} from "ant-design-vue";

const ant = {
    install(Vue: any) {
        Vue.component(Button.name, Button);
        Vue.component(DatePicker.name, DatePicker);

    }
};
export default ant;