import { mount } from "@vue/test-utils";
import Demo1 from "@/components/Demo1.vue";

describe("Demo1", () => {
  // Inspect the raw component options
  it("has data", () => {
    expect(typeof Demo1.data).toBe("function");
  });
});

describe("Mounted Demo1", () => {
  const wrapper = mount(Demo1);

  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain("What is the sum of the two numbers?");
  });

  it("renders correctly with different data", async () => {
    wrapper.setData({ x1: 5, x2: 10 });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain("10");
  });

  it("button click without correct sum", () => {
    expect(wrapper.vm.message).toBe("");
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.message).toBe("TRY AGAIN");
  });

  it("button click with correct sum", () => {
    wrapper.setData({ guess: "15" });
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.message).toBe("SUCCESS!");
  });
});
