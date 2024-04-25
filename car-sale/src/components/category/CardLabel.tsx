import { Typography } from "@mui/material"

export const CardLabel = ({label}: {label: string}) => {
    return <Typography variant="body2" sx={{color: 'orange', bgcolor: '#dddfff', borderRadius: 1, padding: '3px', fontSize: '12px'}}>{label}</Typography>
}