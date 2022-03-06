import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LinearWithValueLabel from "./../../components/containers/LinearProgressReview";
import {RecoilRoot} from "recoil" ;

it("ShortVideos", () => {
  const wrapper = shallow(<RecoilRoot><LinearWithValueLabel /></RecoilRoot>);
  expect(toJson(wrapper)).toMatchSnapshot();
});