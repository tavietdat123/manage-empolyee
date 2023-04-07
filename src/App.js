import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LayoutDefault from './App/Layout/Layout';
import { publicRoute } from './router';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <Routes>
                {publicRoute.map((el, index) => {
                    const Element = el.component;
                    let Layout = LayoutDefault;
                    if (el.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={el.path}
                            element={
                                <Layout>
                                    <Element />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
