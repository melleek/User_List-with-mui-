import React from 'react'
import { useState } from "react"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ButtonGroup from '@mui/material/ButtonGroup';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';


// // info 
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

// select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// search 
import TextField from '@mui/material/TextField';

// table 
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import NorthIcon from '@mui/icons-material/North';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StorageIcon from '@mui/icons-material/Storage';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';


// modal Add
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// table style 

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const top100Films = [
  { label: 'RM', year: 1994 },
  { label: 'Suga', year: 1972 },
  { label: 'V', year: 1974 },
  { label: 'Jungkook', year: 2008 },
  { label: 'Jimin', year: 1957 },
  { label: "J-Hope", year: 1993 },
]


const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      img: "./src/assets/Avatar1.png",
      name: "Suga",
      email: "suga.youngishi@gmail.com",
      city: "Dushanbe",
      status: "true",
      number: "51692812",
      icon: "",
      completed: false
    },
    {
      id: 2,
      img: "src/assets/Avatar2.png",
      name: "RM",
      email: "rm.namjoonshi@gmail.com",
      city: "Korea",
      status: "false",
      number: "2595259095",
      icon: "",
      completed: false
    },
    {
      id: 3,
      img: "src/assets/Avatar3.png",
      name: "J-Hope",
      email: "jhope.xosokashi@gmail.com",
      city: "Dushanbe",
      status: "false",
      number: "2595259095",
      icon: "",
      completed: false
    },
    {
      id: 4,
      img: "src/assets/Avatar4.png",
      name: "Jimin",
      email: "jimina.minminshi@gmail.com",
      city: "Korea",
      status: "false",
      number: "2595259095",
      icon: "",
      completed: false
    },
    {
      id: 5,
      img: "src/assets/Avatar5.png",
      name: "Taehyung",
      email: "v.taetaeshi@gmail.com",
      city: "Dushanbe",
      status: "false",
      number: "2595259095",
      icon: "",
      completed: false
    },
    {
      id: 6,
      img: "src/assets/Avatar6.png",
      name: "Jungkook",
      email: "jk.jungkookshi@gmail.com",
      city: "Korea",
      status: "false",
      number: "2595259095",
      icon: "",
      completed: false
    },
  ])

  const [btnD, setBtnD] = useState(false)

  // Func Brackdowns 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // modalAdd
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  // modalEdit
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = (e) => {
    let user = todo.find((el) => el.id == e)
    console.log(user);
    setOpenEdit(true)
    setIdx(e)
    setNameEdit(user.name);
    setCityEdit(user.city);
    setNumberEdit(user.number);
    setEmailEdit(user.email);
    setImgEdit(user.img);
    setStatusEdit(user.status);
  };
  const handleCloseEdit = () => setOpenEdit(false);



  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState("")
  const [statusA, setStatusA] = useState("")
  const [idx, setIdx] = useState(null)

  // input 
  // add
  const [img, setImg] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  //итихоб 
  const [click, setClick] = useState("") 
  const [clickN, setClickN] = useState("")

  // input 
  // edit
  const [imgEdit, setImgEdit] = useState("")
  const [nameEdit, setNameEdit] = useState("")
  const [emailEdit, setEmailEdit] = useState("")
  const [cityEdit, setCityEdit] = useState("")
  const [numberEdit, setNumberEdit] = useState("")
  const [statusEdit, setStatusEdit] = useState("")

  function addUser() {
    let newUser = {
      id: new Date().getTime(),
      name: name,
      number: number,
      status: clickN,
      city: click,
      email: email,
      img: img,
      icon: "",
      completed: false
    }
    setTodo([...todo, newUser])
    setName("")
    handleCloseAdd(false)
  }

  // COMUSER
  function comUser(id) {
    let data = todo.map((e) => {
      if (e.id === id) {
        if (e.status == 'true') {
          e.status = 'false'
        } else {
          e.status = 'true'
        }
      }
      return e
    })
    setTodo(data)
  }
  console.log(idx);

  function editUser() {
    let changeUser = todo.map((e) => {
      if (e.id === idx) {
        e.img = imgEdit;
        e.name = nameEdit;
        e.email = emailEdit;
        e.city = cityEdit;
        e.number = numberEdit;
        e.status = statusEdit;
      }
      return e;
    });
    setTodo(changeUser);
    handleCloseEdit(false);
  }
  // DELETE
  function deleteUser(idx) {
    // console.log(idx);
    setTodo(
      todo.filter((elem) => {
        return elem.id != idx
      })
    )
  }

  const list = () => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onClick={() => setBtnD(false)}
      onKeyDown={() => setBtnD(false)}
    >
      <List>
        <Box sx={{ display: "flex", padding: "15px", justifyContent: "space-between", alignItems: "center" }}>
          <ClearIcon onClick={() => setBtnD(false)} />
          <Typography fontWeight={700} sx={{ fontSize: "28px" }}>User info</Typography>
        </Box>
        <Divider />
      </List>
      {todo.map((e) => {
        if (e.id == idx) {
          return (

            <List>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}>
                <img src={e.img} className="w-[30%] pt-[20px]" />
                <Box sx={{ textAlign: "center" }}>
                  <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>{e.name}</Typography>
                  <Typography sx={{ color: "#696C71", fontSize: "16px" }}>{e.email}</Typography>
                </Box>
              </Box>
              <Divider sx={{ margin: "25px" }} />
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "25px" }}>
                  <Typography align="right" sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <LockIcon />City
                  </Typography>
                  <Typography>{e.city}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "25px" }}>
                  <Typography align="right" sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <WatchLaterIcon />Status
                  </Typography>
                  <Button sx={{ width: "100px", color: "black", borderRadius: "none", backgroundColor: e.status == 'true' ? "green" : "rgba(116, 137, 152, 1)", color: "white" }}>{e.status == "true" ? "Active" : "Inactive"}</Button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "25px" }}>
                  <Typography align="right" sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <LocalOfferIcon />Number
                  </Typography>
                  <Typography>{e.number}</Typography>

                </Box>
              </Box>
            </List>
          )
        }
      })}
    </Box>
  );

  return (
    <>

      {/* modal add */}
      <div>
        <Modal
          open={openAdd}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "20px" }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add_User
              </Typography>
              <ClearIcon onClick={handleCloseAdd} sx={{ cursor: "pointer" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <TextField id="outlined-basic" label="Img" variant="outlined" value={img} onChange={(e) => setImg(e.target.value)} />
              <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
              <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField id="outlined-basic" label="Number" variant="outlined" value={number} onChange={(e) => setNumber(e.target.value)} />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ fontSize: "20px" }} >City</InputLabel>
                <Select
                  label="City"
                  value={click}
                  onChange={(e) => setClick(e.target.value)}>
                  <MenuItem value="Dushanbe">Dushanbe</MenuItem>
                  <MenuItem value="Korea">Korea</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ fontSize: "20px" }}>Status</InputLabel>
                <Select
                  value={clickN}
                  label="All status"
                  onChange={(e) => setClickN(e.target.value)}
                >
                  <MenuItem value={"true"}>Active</MenuItem>
                  <MenuItem value={"false"}>Inactive</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button sx={{ marginTop: "20px" }} onClick={() => addUser()}>Save</Button>
          </Box>
        </Modal>
      </div>
      {
        <div>
          <Drawer
            anchor="right"
            open={btnD}
            onClose={() => setBtnD(false)}
          >
            {list()}
          </Drawer>
        </div>}

      {/* modal edit */}
      <div>
        <Modal
          open={openEdit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "20px" }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit_User
              </Typography>
              <ClearIcon onClick={handleCloseEdit} sx={{ cursor: "pointer" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <TextField id="outlined-basic" label="Img" variant="outlined" value={imgEdit} onChange={(e) => setImgEdit(e.target.value)} />
              <TextField id="outlined-basic" label="Name" variant="outlined" value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} />
              <TextField id="outlined-basic" label="Email" variant="outlined" value={emailEdit} onChange={(e) => setEmailEdit(e.target.value)} />
              <TextField id="outlined-basic" label="Number" variant="outlined" value={numberEdit} onChange={(e) => setNumberEdit(e.target.value)} />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ fontSize: "20px" }} >City</InputLabel>
                <Select
                  label="City"
                  value={cityEdit}
                  onChange={(e) => setCityEdit(e.target.value)}>
                  <MenuItem value="Dushanbe">Dushanbe</MenuItem>
                  <MenuItem value="Korea">Korea</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ fontSize: "20px" }}>Status</InputLabel>
                <Select
                  value={statusEdit}
                  label="All status"
                  onChange={(e) => setStatusEdit(e.target.value)}
                >
                  <MenuItem value={"true"}>Active</MenuItem>
                  <MenuItem value={"false"}>Inactive</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button sx={{ marginTop: "20px" }} onClick={() => editUser()}>Save</Button>
          </Box>
        </Modal>
      </div>

      <div className='flex items-ceneter justify-between p-[50px]'>
        <Typography variant="h3" gutterBottom>User List</Typography>
        <Box sx={{ display: "flex", alignItems: 'center', gap: "40px" }}>
          <Button onClick={handleOpenAdd} variant="contained" sx={{ borderRadius: "4px", padding: "8px", paddingLeft: "10px", paddingRight: "15px", display: "flex", alignItems: "center", gap: "5px" }}>
            <AddIcon /> New
          </Button>
          <ButtonGroup size="large" aria-label="large button group">
            <Button key="one" sx={{ display: "flex", alignItems: "center", justifyItems: "center", gap: "8px", background: "rgba(0, 0, 0, 0.08)", color: "black", border: "1px solid rgba(0, 0, 0, 0.12)" }}>LIGHT<LightModeIcon /></Button>
            <Button key="two" sx={{ display: "flex", alignItems: "center", justifyItems: "center", gap: "8px", color: "rgba(0, 0, 0, 0.60)", border: "1px solid rgba(0, 0, 0, 0.12)" }}>DARK<DarkModeIcon /></Button>
          </ButtonGroup>
        </Box>
      </div>

      {/* search,  */}
      <div className='flex justify-between items-center pl-[50px] pr-[50px] pb-[30px]'>
        <div className='flex w-[70%] items-center  gap-[16px]'>
          <Box sx={{ minWidth: 120, paddingTop: "0", width: "25%" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ fontSize: "20px" }} value={search} onChange={(e) => setSearch(e.target.value)}>City</InputLabel>
              <Select
                label="City"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}>
                <MenuItem value=""><em>All cites</em></MenuItem>
                <MenuItem value="Dushanbe">Dushanbe</MenuItem>
                <MenuItem value="Korea">Korea</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, paddingTop: "0", width: "25%" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ fontSize: "20px" }}>Status</InputLabel>
              <Select
                value={statusA}
                label="All status"
                onChange={(e) => setStatusA(e.target.value)}
              >
                <MenuItem value=""><em>All status</em></MenuItem>
                <MenuItem value={"true"}>Active</MenuItem>
                <MenuItem value={"false"}>Inactive</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className='w-[20%]'>
          <TextField id="outlined-basic" label="Search" variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>

      {/* table */}
      <TableContainer sx={{ width: "95%", margin: "0 auto", paddingBottom: "50px", paddingTop: "10px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell >
                <Box sx={{ display: "flex", justifyItems: "center", alignItems: "center", gap: "8px" }}>
                  <AccountCircleIcon />
                  <Typography>Name</Typography>
                </Box>

              </StyledTableCell>
              <StyledTableCell align="right">
                <Box sx={{ display: "flex", justifyItems: "center", alignItems: "center", gap: "8px" }}>
                  <LockIcon />
                  <Typography>City</Typography>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Box sx={{ display: "flex", justifyItems: "center", alignItems: "center", gap: "8px" }}>
                  <WatchLaterIcon />
                  <Typography>Status</Typography>
                  <NorthIcon />
                </Box>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Box sx={{ display: "flex", justifyItems: "center", alignItems: "center", gap: "8px" }}>
                  <LocalOfferIcon />
                  <Typography>Phone</Typography>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Box sx={{ display: "flex", justifyItems: "center", alignItems: "center", gap: "8px" }}>
                  <StorageIcon />
                  <Typography>Action</Typography>
                </Box>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todo
              .filter((e) => {
                return e.name.toLocaleLowerCase().trim().includes(search.toLowerCase().trim())
              })
              .filter((e) => {
                return e.city.toLocaleLowerCase().trim().includes(selected.toLowerCase().trim())
              })
              .filter((e) => {
                return e.status.toLocaleLowerCase().trim().includes(statusA.toLowerCase().trim())
              })
              .map((e) => (
                <StyledTableRow key={e.id}>
                  <StyledTableCell component="th" scope="row">
                    <div className='flex items-center gap-[10px]'>
                      <img src={e.img} alt="" />
                      <div className='flex flex-col gap-[2px]'>
                        <h1>{e.name}</h1>
                        <p>{e.email}</p>
                      </div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "start" }}>{e.city}</StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "start" }}><Button sx={{ width: "100px", color: "black", borderRadius: "none", backgroundColor: e.status == 'true' ? "green" : "rgba(116, 137, 152, 1)", color: "white" }} onClick={() => comUser(e.id)} >{e.status == "true" ? "Active" : "Inactive"}</Button>
                  </StyledTableCell>

                  <StyledTableCell align="right" sx={{ textAlign: "start" }}>{e.number}</StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "start" }}><div>
                    <Button

                      color='inherit'
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={(event) => { handleClick(event), setIdx(e.id) }}
                    >
                      <MoreHorizIcon />
                    </Button>
                    <Menu

                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => {
                        handleClose()
                        setBtnD(true)
                      }} sx={{ display: "flex", alignItems: "center", gap: "20px" }}><AccountCircleIcon /> View profile</MenuItem>

                      <MenuItem onClick={() => {
                        handleOpenEdit(idx);

                      }} sx={{ display: "flex", alignItems: "center", gap: "20px" }}> <ModeEditIcon /> Edit</MenuItem>
                      <MenuItem onClick={() => {
                        deleteUser(idx)
                        handleClose()
                      }
                      } sx={{ display: "flex", alignItems: "center", gap: "20px" }}> <DeleteIcon /> Delete</MenuItem>
                    </Menu>
                  </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}


          </TableBody>
        </Table>
      </TableContainer >
    </>
  )
}

export default App