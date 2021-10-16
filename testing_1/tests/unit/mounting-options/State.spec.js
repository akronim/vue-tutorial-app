import { mount } from "@vue/test-utils";
import StateComponent from "@/components/StateComponent";

describe("Props", () => {
  it("displays message", () => {
    const wrapper = mount(StateComponent, {
      // Mocking Props
      propsData: {
        msg: "Hello world",
      },
      // Mocking Data
      data() {
        return { count: 2 };
      },
    });

    expect(wrapper.props().msg).toBe("Hello world");
    expect(wrapper.text()).toContain("Hello world");

    expect(wrapper.vm.count).toBe(2);
  });

  it("manipulates state", async () => {
    const wrapper = mount(StateComponent, {
      propsData: {
        msg: "Hello world",
      },
    });

    await wrapper.setData({ count: 10 });
    expect(wrapper.vm.count).toBe(10);

    await wrapper.setProps({ msg: "bar" });
    expect(wrapper.props().msg).toBe("bar");
  });

  it("updates the message", async () => {
    const wrapper = mount(StateComponent, {
      propsData: {
        msg: "Hello world",
      },
    });
    const newMsg = "Brush my teeth";
    await wrapper.setProps({
      msg: newMsg,
    });
    expect(wrapper.props().msg).toBe(newMsg);
    expect(wrapper.text()).toContain(newMsg);
  });
});
