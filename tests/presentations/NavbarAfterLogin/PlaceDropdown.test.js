import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import PlaceDropdown from "./../../../components/presentations/NavbarAfterLogin/PlaceDropdown";

it("PlaceDropdown", () => {
  const wrapper = shallow(<PlaceDropdown />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
