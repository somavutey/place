import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ContactUs from "./../../components/presentations/ContactUs";

it("ContactUs snapshot", () => {
  const wrapper = shallow(<ContactUs />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
