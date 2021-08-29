import { mount } from "@vue/test-utils";
import Bilingual from "@/components/Bilingual.vue";
import translations from "@/translations";

describe("Bilingual", () => {
  it("renders successfully", () => {
    const wrapper = mount(Bilingual, {
      mocks: {
        $t: (msg) => translations["en"][msg],
      },
    });

    expect(wrapper.find(".hello").text()).not.toBe("");
    console.log(wrapper.html());
  });

  it("renders successfully", () => {
    const wrapper = mount(Bilingual);

    expect(wrapper.find(".hello").text()).not.toBe("");
    console.log(wrapper.html());
  });
});
