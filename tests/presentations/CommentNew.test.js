import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Comment from "./../../components/presentations/CommentNew";
import {RecoilRoot} from 'recoil'

it("CommentNew", () => {
  const wrapper = shallow(<RecoilRoot><Comment /></RecoilRoot>);
  expect(toJson(wrapper)).toMatchSnapshot();
});
