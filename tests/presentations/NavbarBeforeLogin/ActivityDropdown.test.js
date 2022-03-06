import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ActivityDropdown from "./../../../components/presentations/NavbarBeforeLogin/ActivityDropdown";

it("ActivityDropdown", () => {
  const wrapper = shallow(<ActivityDropdown />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
