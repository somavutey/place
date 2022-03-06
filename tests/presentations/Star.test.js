import { StarBorderPurple500 } from "@mui/icons-material";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Star from "../../components/presentations/Star";

it("ShortVideos", () => {
  const wrapper = shallow(<StarBorderPurple500 />);
  expect(toJson(wrapper)).toMatchSnapshot();
});