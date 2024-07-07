// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// const LandingPage = () => {
//     return (
//         <div>
//         Landing Page(Unprotected)
//         <div>
//             <Link href="/sign-in">
//                 <Button>
//                     Login
//                 </Button>
//             </Link>
//             <Link href="/sign-up">
//                 <Button>
//                     Register
//                 </Button>
//             </Link>
//         </div>
//         </div> 
//     );
// }
// export default LandingPage;



import { Button } from "@/components/ui/button";
import Link from "next/link";


const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundImage: 'url("/login background.jpg")',
  backgroundSize: 'cover',
  color: '#fff',
};

const landingTextStyle: React.CSSProperties = {
  fontSize: '64px',
  marginBottom: '20px',
  textAlign: 'center',
  fontWeight: 'bold',
  textShadow: '1px 1px 4px #000000',
};

const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '24px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    height: '50px',
    width: '150px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    textDecoration: 'none',
};
const cardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    padding: '2rem',
    height: '300px',
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

const LandingPage = () => {
    return (
        <div style={containerStyle}>
            <p style={landingTextStyle}>Visual Forge</p>
            {/* <img src="/image.png" alt="" /> */}
            <div  style={cardStyle}>
                <Link href="/sign-in">
                    <Button  className="inline-block rounded-full bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400" style={buttonStyle}>
                        Login
                    </Button>
                </Link>
                <br />
                <Link href="/sign-up">
                    <Button style={buttonStyle}>
                        Register
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;
