import { shallowMount, mount } from "@vue/test-utils";
import ParentWithAPICallChild from "@/components/ParentWithAPICallChild.vue";
import ComponentWithAsyncCall from "@/components/ComponentWithAsyncCall.vue";

// Sometimes, mounting a whole component with all its dependencies might
// become slow or cumbersome. For example, components that contain
// many child components.

// shallowMount creates a Wrapper that contains the mounted and
// rendered Vue component, but with stubbed child components

// it is not the suggested way of testing components

describe("Shallow mounting", () => {
  it("renders with shallowMount and does not initialize API call", () => {
    const wrapper = shallowMount(ParentWithAPICallChild);

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true);
  });
});
