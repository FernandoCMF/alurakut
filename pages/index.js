import MainGrid from '../src/components/MainGrid/Index';
import Box from '../src/components/Box/Index';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations/Index';
import {
  AlurakutMenu, 
  OrkutNostalgicIconSet
} from '../src/components/lib/AlurakutCommons';

function ProfileSidebar(props) {
  return(
    <Box>
      <img 
        style={{borderRadius:'8px' }}
        src={`https://github.com/${props.githubUser}.png`}
      />
    </Box>
  )
}
export default function Home() {
  const user = 'FernandoCMF';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]
  return (
    <>
    <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
            <ProfileSidebar githubUser={user}/>
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h2 className="title">
              Bem vindo(a)
            </h2>
            <OrkutNostalgicIconSet/>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((item)=>{
                return(
                  <li>
                    <a href={`/users/${item}`} key={item}>
                      <img src={`https://github.com/${item}.png`}/>
                      <span>{item}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
