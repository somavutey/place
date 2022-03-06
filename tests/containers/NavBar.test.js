import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Navbar from "./../../components/containers/NavBar";

it("Navbar", () => {
  const wrapper = shallow(<Navbar />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
