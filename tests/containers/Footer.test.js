import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Footer from "./../../components/containers/Footer";

it("Footer", () => {
  const wrapper = shallow(<Footer />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
