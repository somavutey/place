import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Arrow from "../../../components/presentations/Slider/Arrow";

it("Arrow", () => {
  const wrapper = shallow(<Arrow />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
