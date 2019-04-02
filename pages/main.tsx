import * as React from 'react'
import { Main as MainComponent} from '../src/pages/main'

class Main extends React.Component<{headers: any}, {}> {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

    return { headers: req.headers }
  }

  public render() {
    const { headers } = this.props

    console.log(headers)

    return (
      <React.Fragment>
        <MainComponent/>
      </React.Fragment>
    )
  }
}

export default Main
