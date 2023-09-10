import { mount } from "@vue/test-utils";
import TestComponent from "@/components/TestComponent.vue";

describe("TestComponent", () => {
  const wrapper = mount(TestComponent);

  it("should render", () => {
    expect(wrapper.html()).toContain("this is my test component");
    expect(wrapper.find("h1").text()).toBe("hello world");
    expect(wrapper.find("p#text").text()).toBe("enter text here");
  });

  it("should click", async () => {
    await wrapper.find("button").trigger("click");
    expect(wrapper.find("#counter").text()).toContain(1);
  });

  it("should allow you to pass in title property", () => {
    const wrapper = mount(TestComponent, {
      props: {
        title: "foobar",
      },
    });
    expect(wrapper.find("h1").text()).toBe("foobar");
  });

  it("should allow you to edit text through the text box", async () => {
    await wrapper.find("input").setValue("ruahman");
    expect(wrapper.find("#text").text()).toBe("ruahman");
  });
});
