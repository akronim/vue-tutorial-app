import { mount, config } from "@vue/test-utils";
import OnClick from "@/components/OnClick";
import sinon from "sinon";

describe("OnClick", () => {
    it("makes sure the habit name is rendered", () => {
        const habitName = "Learn something new";
        const wrapper = mount(OnClick, {
            propsData: {
                name: habitName,
            },
        });
        expect(wrapper.props().name).toBe(habitName);
        expect(wrapper.text()).toContain(habitName);
    });

    it("marks the habit as completed", async () => {
        const wrapper = mount(OnClick, {
            propsData: {
                name: "Learn something new",
            },
        });
        const box = wrapper.find(".habit__box");
        await box.trigger("click");
        expect(box.text()).toContain("✔");
    });

    it("calls the onHabitDone method - 1", async () => {
        config.showDeprecationWarnings = false;

        const wrapper = mount(OnClick, {
            propsData: {
                name: "Learn something new",
            },
        });
        wrapper.setMethods({
            onHabitDone: jest.fn(),
        });
        const box = wrapper.find(".habit__box");
        await box.trigger("click");
        expect(wrapper.vm.onHabitDone).toHaveBeenCalled();
    });

    it("updates the habit method", async () => {
        const wrapper = mount(OnClick, {
            propsData: {
                name: "Learn something new",
            },
        });
        const newHabitName = "Brush my teeth";
        await wrapper.setProps({
            name: newHabitName,
        });
        expect(wrapper.props().name).toBe(newHabitName);
    });
});
