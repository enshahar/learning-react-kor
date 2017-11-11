import { Link, Route } from 'react-router-dom'
import { MainMenu, AboutMenu } from './menus'
import './stylesheets/pages.scss'

const PageTemplate = ({children}) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>

export const Home = () =>
    <div className="home">
        <h1>[회사 웹사이트]</h1>
        <nav>
            <Link to="about">[회사 소개]</Link>
            <Link to="events">[이벤트]</Link>
            <Link to="products">[제품]</Link>
            <Link to="contact">[고객 지원]</Link>
        </nav>
    </div>

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>'{location.pathname}' 경로의 자원을 찾을 수 없습니다.</h1>
    </div>

export const Events = () =>
    <PageTemplate>
      <section className="events">
          <h1>[이벤트 달력]</h1>
      </section>
    </PageTemplate>

export const Products = () =>
    <PageTemplate>
        <section className="products">
            <h1>[제품 목록]</h1>
        </section>
    </PageTemplate>

export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>[고객 지원]</h1>
        </section>
    </PageTemplate>

export const About = ({ match }) =>
    <PageTemplate>
        <section className="about">
            <Route component={AboutMenu} />
            <Route exact path="/about" component={Company}/>
            <Route path="/about/history" component={History}/>
            <Route path="/about/services" component={Services}/>
            <Route path="/about/location" component={Location}/>
        </section>
    </PageTemplate>

export const Services = () =>
    <section className="services">
        <h2>서비스</h2>
        <p>
           거친 것은 든 뼈 그들에게 이것이다. 이상은
           위하여서, 인간의 불어 있으며, 위하여 있다. 
           있음으로써 그들은 그러므로 봄바람을 가치를 
           것이다. 보이는 인생을 사라지지 이상을 남는 
           심장은 것이다. 피부가 석가는 원대하고, 얼음과 
           가슴에 구하지 있음으로써 교향악이다. 가슴이 
           끝까지 하는 끓는 넣는 보이는 황금시대다. 
           가치를 구하기 이상은 끓는 아름답고 것이다. 
           돋고, 반짝이는 소담스러운 황금시대의 이상, 
           보이는 길지 때문이다. 바로 무엇을 공자는 
           우리 청춘 인도하겠다는 피다. 석가는 곳으로 
           청춘의 두손을 무엇이 실로 무엇을 있으랴?
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>

export const Location = () =>
    <section className="location">
        <h2>회사 위치</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam.
        </p>
        <p>
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>

export const Company = () =>
    <section className="company">
        <h2>회사 소개</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>

export const History = () =>
    <section className="history">
        <h2>연혁</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor.
        </p>
        <p> Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>
