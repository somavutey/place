import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Dots from "../../../components/presentations/Slider/Dots";

it("Dots", () => {
  const wrapper = shallow(<Dots />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
