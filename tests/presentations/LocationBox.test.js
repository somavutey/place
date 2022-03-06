import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LocationBox from "./../../components/presentations/LocationBox";

it("LocationBox", () => {
  const wrapper = shallow(<LocationBox />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
