import Card from "./components/Card";
const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/027/127/473/small/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Engineer II",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$52/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "data:image/jpeg;base64,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",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8AgPoAAAAAevrt7e0AfvoAfPorKysAePoAdvq5ubnJycmzs7MAc/rz8/Orq6v4+/8jIyM9PT35+fnX19cAcPrE2f2IiIiampobGxtvb2+OtPzi7P7r8v7L3f3b5/5ISEji4uJcXFwUFBRPlPu0zf1sovt3qfuevfy90/03ivqqyf0vhfp+fn5UVFRkZGRXmvsAIyd0AAAF4UlEQVR4nO1YWZuiOBRFMAjiguKOqChuaNXU//91k+UmhBB7pj+J3Q85L4VJIKfucu5NHMfCwsLCwsLCwsLCwsLCwsLCwsLC4qOIF480TW/nrXZ2e769njSF7PpEQeAFgd8pFrE6u/vp+C8nTSFOw6DDgYbFTiE896XJ/Wc47cqKEoHvpZI9dh2vNunfPsFpMUQdBcOfjM+eA3V2npp34SNQKWF4T2B1HoLffM/n7MKLaU67eRVNqDKKX1BWd+Y6f15e02s5B0cODXtwL2gEz6IoSo/HtP/ETtozO3kXFt3ZFWiHZ6OkSiDhhzciQtm9GHKSlzgrCQckUdhD1AfZ60++jRsElFeIXR7cVmH6QxigjiwCWUGn/Yu5YM94XJfSf34ORfbTAKoLU8b+jXBhjNSV7YDKmjcWQiuJo+7KOzvqQPQ0xSkDm8zrEu48hoKTd228daWcA1OmYp/vBKk6ceMeRGXzrXhoMqpYcnU6z2YqlaBIoeo8gpRSDsy0DKDWgUYKOd8O0thj+9TbtxUUbOO5bi6FYNcxdi7sRROctt6LiHJ4ilEH7pqzCxZVmpm3ASoZ6L5dClXwC800rZeeiQrIcg8Vmqi5SZ2DzoEX31D+QSz7TSFytrJ6Ik1yPsIXWfsuoAMYakSQOe/JTdVsn3Z0wbz9zvjOSM2bPmBtX3B7gIR6jajbljQHHq2TSlmCocbEFnomx3kiiHWVeEzVROf5N8FUym/6hjYstI9bcF1vmIQqla4GvQn0IrfuQZWUV2DlqyENVbNtTjEYQW1sISlZ4xBDu9BwFGhG2+m37eiT7xrKGcfbhaES66wRRG3X5D24TyF1B4mCbI+hPqKyHussdVHbmgCklAIWM+dV9ZCfwJQKufgkKdYfI0kneKyHNQKGSG117oPmIJAkAGJPEau7mZiCg0yttcyYWqIfeSFv2GviwbIPtV78gJS81YUlulLTeBsjO9CQToGiy6oM4uMpXd8OSEkZmNGXka7Veg8pmEXExR00qdGRXHlhFiVpEWgysg3sWKyIJu/Br1SavYxwIAh7zO45VEVtARDVcI0Qg+E6gab0i47do83mjt0nmGjyxIEFzVEhrp6abQqBODL782fhw82fGnutYMuPwUQt+VOo18NLoFlq4jRTHc4raI82DqmBjUtInZ9bQFx4ykbzlzd021JZi56GbvrjomYr3//FTUqmrG297lU7XcLq3j54/jJIsqu8tjQSUIDFBQ3DwAvCYfGfB97db6x9E9vFLb2mj/3/EZ3fWWthYWFh8RGMVqvVclYb6pKh0R/iwxisXdf9rg0t8Yjb1a5OlptN9AFSPUJhII3k7mtSo6nrjj9FaiKNbP4WUu5KDETu30Hq5Lq9nA8cXHctk8qjfpSI5dO6q0d4Uk//bVJjvNUX/B5gX/YFqWTM7LYh+cmCjYFGe36gz8ccW3fdJjdCqj8QLEZ4n2XEfyb/cBLrWZPUgP/ordZur21SA+fouv/Qn2MS9JxU8o0fDl9fJPRPudM9HI/Y09Pj8XiYQfAdNl9HRqx9UsRhVEFdEsic1Ar/pSo6Ix7EZhx1SaAno9GI2dRd4WVJ1DNDysE2mTpUN78TTmp0EqHGaUrZ13fFYzIxQ2pG42SGv94XFPC2EyhAyZExkEiRcOMfGZshRWx0IFuTigOksPcOM4YcU1jWSblshKJviFQXb/IFaQWkMM9Tb0LRA0/WSQnFMkWKRjXEUEVKxuYPkCKJBfJUuW/arxA1SInaZIwU1UIWJUAKh+9U2UoiNWX5apiUk+d5IpPKT5Ix2ExSkVpxaWMia4qUAFclouR9NtSHTbFiHuBfwGV7Sll1N4bEU0sqn5By259FY+ErYp/vcX81Y4/rzXj81TNUZvSkqKRyHOnIaF0V5I2YWxopyC9IOfmGkThNB9BTRdOqdVlN6PM0ilq2VBJFUa6MdaOoz/u62WC5XI2lNm80wIedMXAmk3gpfkFaYWFhYWFhYWFhYWFhYWFhYWFhYWFhAP8CbydiwZjOYvwAAAAASUVORK5CYII=",
      companyName: "Meta",
      datePosted: "4 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hour",
      location: "Gurugram, India"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "11 weeks ago",
      post: "Senior Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hour",
      location: "Remote, India"
    },
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2017/05/Color-NVIDIA-Logo.jpg",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://blog.logomaster.ai/assets/site/13/13ba9b16b2c987cd38c792a1ee6958f647aaffb27c4c2b68847bdbbbae6c9a2c.jpg",
      companyName: "IBM",
      datePosted: "2 weeks ago",
      post: "Cloud Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$44/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/oracle-2.svg",
      companyName: "Oracle",
      datePosted: "1 week ago",
      post: "Java Backend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-icon.png",
      companyName: "Adobe",
      datePosted: "3 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$58/hour",
      location: "Noida, India"
    }
  ];

  console.log(jobOpenings);

  return (
    <div className="min-h-screen min-w-screen bg-black flex flex-wrap p-10 gap-6">

      {jobOpenings.map(function (elem) {
        return <Card companyName={elem.companyName} post={elem.post} pay={elem.pay} location={elem.location} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} brandLogo={elem.brandLogo} />
      })}

    </div>
  )
}
export default App;
