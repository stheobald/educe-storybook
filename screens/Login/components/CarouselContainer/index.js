import { Carousel } from 'react-bootstrap'
import Styled from './styled'

export default class CarouselContainer extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      index: 0,
      direction: null
    }
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    })
  }

  render() {
    console.log('Styled', Styled)
    const { direction } = this.state

    return (
      <Styled.carousel
        direction={direction}
        onSelect={(i, e) => this.handleSelect(i, e)}
        interval={5000}
        slide={true}
      >
        <Carousel.Item>
          <Styled.img src="/static/images/logoeduce.png" />
          <Styled.carouselCaption>
            <Styled.h1>WELCOME</Styled.h1>
            <Styled.hr />
            <p>
              Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur.
            </p>
          </Styled.carouselCaption>
        </Carousel.Item>
        <Carousel.Item>
          <Styled.img src="/static/images/logoeduce.png" />
          <Styled.carouselCaption>
            <Styled.h1>TENA KOE</Styled.h1>
            <Styled.hr />
            <p>
              Ekore e tika kia noho he Maori rawakore ki tenei whenua; ehara tenei i te mea e ora ai
              tatou e tika ai ranei ratou. E mea ana tatou kia noho te Maori i runga i te rangimarie
              penei me tatou, a e ki ana ahau mehemea tera tetahi iwi i whiwhi nui ki te whenua kua
              kite ratou kei to mawehe atu o ratou whenua i a ratou, e tika ana ano kia pouri ratou.
            </p>
          </Styled.carouselCaption>
        </Carousel.Item>
      </Styled.carousel>
    )
  }
}
