import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NavbarHome from "./../../components/containers/NavBarHome";

it("NavbarHome", () => {
  const wrapper = shallow(<NavbarHome />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
