import { mount } from "@vue/test-utils";
import WrapperComponent from "@/components/WrapperComponent";

test("displays message", () => {
  // - mount() returns a wrapped Vue component we can interact with
  //  - a mounted components are returned inside a Wrapper, which exposes
  //  methods for querying and interacting with the component under testing.
  const wrapper = mount(WrapperComponent, {
    propsData: {
      msg: "Hello world",
    },
  });

  expect(wrapper.text()).toContain("Hello world");
});
