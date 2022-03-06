import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import PlaceDropdown from "./../../../components/presentations/NavbarBeforeLogin/PlaceDropdown";

it("PlaceDropdown", () => {
  const wrapper = shallow(<PlaceDropdown />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
