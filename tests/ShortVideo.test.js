import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ShortVideos from "./../components/ShortVideos";

it("ShortVideos", () => {
  const wrapper = shallow(<ShortVideos />);
  expect(toJson(wrapper)).toMatchSnapshot();
});