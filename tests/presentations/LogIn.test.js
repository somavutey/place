import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LogIn from "./../../components/presentations/LogIn";

it("LogIn", () => {
  const wrapper = shallow(<LogIn />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
