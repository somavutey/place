import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Footer from "./../../components/containers/GroupSocialMediaIcons";

it("GroupSocialMediaIcons", () => {
  const wrapper = shallow(<Footer />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
