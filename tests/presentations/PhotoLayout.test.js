import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import PhotoLayout from "./../../components/presentations/PhotoLayout";

it("PhotoLayout", () => {
  const wrapper = shallow(<PhotoLayout />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
