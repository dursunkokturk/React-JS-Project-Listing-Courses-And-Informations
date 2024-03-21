import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeletedCourses);
  };

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await Axios.get('http://localhost:3004/courses');
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }

    debugger;
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="refleshDiv">
              <h2>Kursların Hepsini Sildin!</h2>
              <button
                className="cardDeleteBtn"
                onClick={() => {
                  fetchCourses();
                }}
              >
                Yenile
              </button>
            </div>
          ) : (
            <Courses courses={courses} removeCourse={deleteCourse} />
          )}
        </>
      )}
    </div>
  );
}

export default App;