import { mount } from "@vue/test-utils";
import EmitterParent from "@/components/EmitterParent";
import EmitterChild from "@/components/EmitterChild";

describe("ParentComponent", () => {
  it("displays 'Emitted!' when custom event is emitted", async () => {
    const wrapper = mount(EmitterParent);

    wrapper.findComponent(EmitterChild).vm.$emit("custom");

    const emitted = wrapper.findComponent(EmitterChild).emitted();

    console.log(emitted);

    // assert event has been emitted
    expect(emitted.custom).toBeTruthy();

    // assert event count
    expect(emitted.custom.length).toBe(2);

    // assert event payload
    expect(emitted.custom[0]).toEqual([]);

    await wrapper.vm.$nextTick();
    console.log(wrapper.html());
    expect(wrapper.html()).toContain("Emitted!");
  });
});
