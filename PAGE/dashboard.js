/* ========================= */
/*      dashboard.css        */
/* ========================= */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:'Poppins',sans-serif;
  background:
  radial-gradient(circle at top left,#2d0e5f 0%,transparent 35%),
  radial-gradient(circle at top right,#182b78 0%,transparent 35%),
  linear-gradient(to bottom,#04040c,#06091c,#090b24);
  color:white;
  min-height:100vh;
  overflow-x:hidden;
  position:relative;
}

/* PARTICLES */

#particles-js{
  position:fixed;
  width:100%;
  height:100%;
  top:0;
  left:0;
  z-index:-2;
}

/* GLOWS */

.glow{
  position:absolute;
  width:500px;
  height:500px;
  border-radius:50%;
  filter:blur(120px);
  opacity:0.25;
  z-index:-1;
}

.glow.one{
  background:#b14cff;
  top:-200px;
  left:-200px;
}

.glow.two{
  background:#47c7ff;
  right:-200px;
  top:100px;
}

/* CONTAINER */

.container{
  display:grid;
  grid-template-columns:260px 1fr;
  min-height:100vh;
}

/* SIDEBAR */

.sidebar{
  background:rgba(10,14,35,0.8);
  border-right:1px solid rgba(255,255,255,0.08);
  padding:30px 22px;
  backdrop-filter:blur(20px);
}

.logo{
  display:flex;
  align-items:center;
  gap:12px;
  font-size:28px;
  font-weight:700;
  margin-bottom:45px;
}

.logo i{
  color:#b14cff;
  font-size:32px;
}

/* MENU */

.menu{
  display:flex;
  flex-direction:column;
  gap:15px;
}

.menu a{
  text-decoration:none;
  color:white;
  display:flex;
  align-items:center;
  gap:15px;
  padding:18px;
  border-radius:18px;
  transition:0.4s;
}

.menu a i{
  font-size:22px;
}

.menu a:hover,
.menu .active{
  background:linear-gradient(90deg,#b14cff,#6d7dff);
  box-shadow:0 0 20px rgba(177,76,255,0.3);
}

/* MAIN */

.main-content{
  padding:35px;
}

/* TOP BAR */

.top-bar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:35px;
}

.top-bar h1{
  font-size:48px;
  margin-bottom:8px;
}

.top-bar p{
  color:#c5c5de;
}

.brain-btn{
  padding:16px 28px;
  border:none;
  border-radius:18px;
  background:linear-gradient(90deg,#b14cff,#6d7dff);
  color:white;
  font-size:16px;
  font-weight:600;
  cursor:pointer;
  transition:0.4s;
}

.brain-btn:hover{
  transform:translateY(-5px);
}

/* HERO */

.hero-card{
  background:rgba(12,16,45,0.8);
  border:1px solid rgba(255,255,255,0.08);
  border-radius:30px;
  padding:40px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
  overflow:hidden;
  position:relative;
  backdrop-filter:blur(20px);
}

.hero-card::before{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(
    120deg,
    transparent,
    rgba(255,255,255,0.05),
    transparent
  );
  transform:translateX(-100%);
  transition:1s;
}

.hero-card:hover::before{
  transform:translateX(100%);
}

.hero-text{
  max-width:500px;
}

.hero-text h1{
  font-size:60px;
  line-height:1.1;
  margin-bottom:20px;
}

.hero-text span{
  background:linear-gradient(to right,#d36fff,#5ecbff);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.hero-text p{
  color:#c5c5de;
  line-height:1.8;
  margin-bottom:30px;
  font-size:18px;
}

.hero-buttons{
  display:flex;
  gap:18px;
  flex-wrap:wrap;
}

.primary-btn,
.secondary-btn{
  padding:18px 30px;
  border:none;
  border-radius:18px;
  cursor:pointer;
  transition:0.4s;
  font-weight:600;
}

.primary-btn{
  background:linear-gradient(90deg,#b14cff,#6d7dff);
  color:white;
}

.secondary-btn{
  background:transparent;
  border:1px solid rgba(255,255,255,0.15);
  color:white;
}

.primary-btn:hover,
.secondary-btn:hover{
  transform:translateY(-5px);
}

.hero-image img{
  width:320px;
  filter:
  drop-shadow(0 0 40px #b14cff)
  drop-shadow(0 0 80px #47c7ff);
  animation:float 4s ease-in-out infinite alternate;
}

/* STATS */

.stats-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:20px;
  margin-bottom:30px;
}

.stat-card{
  background:rgba(12,16,45,0.8);
  border:1px solid rgba(255,255,255,0.08);
  border-radius:24px;
  padding:30px;
  transition:0.4s;
}

.stat-card:hover{
  transform:translateY(-8px);
  box-shadow:0 0 25px rgba(177,76,255,0.2);
}

.stat-card i{
  font-size:34px;
  color:#b14cff;
  margin-bottom:18px;
}

.stat-card h2{
  font-size:34px;
  margin-bottom:10px;
}

.stat-card p{
  color:#c5c5de;
}

/* LOWER GRID */

.lower-grid{
  display:grid;
  grid-template-columns:1fr 380px;
  gap:25px;
}

/* PROGRESS */

.progress-card,
.focus-card{
  background:rgba(12,16,45,0.8);
  border:1px solid rgba(255,255,255,0.08);
  border-radius:28px;
  padding:30px;
  backdrop-filter:blur(20px);
}

.card-title{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
}

.card-title i{
  font-size:28px;
  color:#b14cff;
}

/* BARS */

.bars{
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  height:260px;
}

.bar-item{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:15px;
}

.bar{
  width:55px;
  height:220px;
  background:#141938;
  border-radius:30px;
  overflow:hidden;
  display:flex;
  align-items:flex-end;
}

.bar div{
  width:100%;
  background:linear-gradient(to top,#b14cff,#47c7ff);
  border-radius:30px;
}

/* FOCUS */

.focus-card{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}

.focus-card h2{
  margin-bottom:35px;
}

.focus-circle{
  width:240px;
  height:240px;
  border-radius:50%;
  background:conic-gradient(
    #b14cff 0%,
    #47c7ff 82%,
    #1a1f4a 82%
  );
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0 0 35px rgba(177,76,255,0.25);
}

.inner-circle{
  width:180px;
  height:180px;
  border-radius:50%;
  background:#090d24;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}

.inner-circle h1{
  font-size:48px;
}

.inner-circle p{
  color:#c5c5de;
}

/* FLOAT */

@keyframes float{

  from{
    transform:translateY(-10px);
  }

  to{
    transform:translateY(20px);
  }

}

/* RESPONSIVE */

@media(max-width:1200px){

  .stats-grid{
    grid-template-columns:repeat(2,1fr);
  }

  .lower-grid{
    grid-template-columns:1fr;
  }

}

@media(max-width:950px){

  .container{
    grid-template-columns:1fr;
  }

  .sidebar{
    border-right:none;
    border-bottom:1px solid rgba(255,255,255,0.08);
  }

}

@media(max-width:800px){

  .hero-card{
    flex-direction:column;
    text-align:center;
    gap:30px;
  }

  .hero-text{
    max-width:100%;
  }

  .hero-text h1{
    font-size:42px;
  }

  .stats-grid{
    grid-template-columns:1fr;
  }

  .top-bar{
    flex-direction:column;
    gap:20px;
    align-items:flex-start;
  }

  .hero-image img{
    width:240px;
  }

}