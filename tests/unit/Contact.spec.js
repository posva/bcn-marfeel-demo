import { shallowMount } from "@vue/test-utils";
import Contact from "@/views/Contact.vue";

describe("Contact.vue", () => {
  it("renders props.contact when passed", () => {
    const id = 3;
    const wrapper = shallowMount(Contact, {
      propsData: { id }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
