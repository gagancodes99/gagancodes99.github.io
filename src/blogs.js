export const blogs = [
    {
      id: "b1f7c9a4",
      title: "Understanding Debouncing in JavaScript",
      duration: 5,
      image: "/images/black.jpg",
      description: "Learn how debouncing improves web performance by limiting the rate at which a function is executed.",
      content: [
        {
          type: "text",
          data: "Debouncing is a technique to limit how often a function is executed. It's commonly used in input fields or scroll events to improve performance."
        },
        {
          type: "code",
          language: "javascript",
          data: `
  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }`
        },
        {
          type: "text",
          data: "This function returns a debounced version of the input function. It ensures that the function only runs after the user stops triggering it for the specified delay."
        }
      ]
    },
    {
      id: "a9e3f2b7",
      title: "How to Use useEffect Properly in React",
      duration: 6,
      image: "/images/purple.jpg",
      description: "Master the useEffect hook to manage side effects like data fetching in your React applications.",
      content: [
        {
          type: "text",
          data: "`useEffect` lets you perform side effects like API calls or subscriptions in React components."
        },
        {
          type: "code",
          language: "jsx",
          data: `
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);`
        },
        {
          type: "text",
          data: "This runs once when the component mounts due to the empty dependency array. Always define your async logic inside the effect function."
        }
      ]
    }
  ];