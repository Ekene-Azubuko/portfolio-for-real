import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const Experience = ({ position, period, company, roles, isExpanded, onChange }) => {
  const accordionId = company.toLowerCase().replace(/\s+/g, '-')

  return (
    <Accordion
      className="experience-accordion"
      disableGutters
      expanded={isExpanded}
      onChange={onChange}
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '&:before': { display: 'none' }
      }}
    >
      <AccordionSummary
        className="experience-summary"
        expandIcon={isExpanded ? <RemoveIcon /> : <AddIcon />}
        aria-controls={`${accordionId}-content`}
        id={`${accordionId}-header`}
        sx={{
          backgroundColor: '#697565',
          borderRadius: '12px',
          minHeight: 'unset',
          padding: 0,
          '& .MuiAccordionSummary-content': {
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            margin: 0,
            padding: '1rem 1.25rem'
          },
          '& .MuiAccordionSummary-expandIconWrapper': {
            color: 'rgb(33, 37, 41)',
            marginRight: '1.25rem'
          },
          '&.Mui-expanded': {
            minHeight: 'unset'
          },
          '&.Mui-expanded .MuiAccordionSummary-content': {
            margin: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }
        }}
      >
        <h2>{position}</h2>
        <h2>{period}</h2>
      </AccordionSummary>
      <AccordionDetails
        className="experience-details"
        sx={{
          padding: '1.25rem',
          paddingTop: '1rem'
        }}
      >
        <h3>{company}</h3>
        <h4>{position}</h4>
        <ul>
          {roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  )
}

export default Experience;
