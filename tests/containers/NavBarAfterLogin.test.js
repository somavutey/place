import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import PrimarySearchAppBar from "./../../components/containers/NavBarAfterLogin";

it("PrimarySearchAppBar", () => {
  const wrapper = shallow(<PrimarySearchAppBar />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
