import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TrainerProfile from '@/components/TrainerProfile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { trainers } from '@/data/trainers';
import { Users, Star, Award, Mail, MessageSquare, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

// New Modal Component
const TrainerProfileModal = ({ trainer, onClose }) => {
    if (!trainer) return null;

    return (
        <div className="fixed inset-0 z-50 bg-gray-950/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative bg-gray-900 border border-gray-800 text-white rounded-xl shadow-lg w-full max-w-2xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto transform transition-all duration-300">
                {/* Header with Back Button */}
                <div className="p-4 md:p-6 sticky top-0 bg-gray-900 border-b border-gray-800 flex items-center z-10">
                    <Button 
                        onClick={onClose}
                        variant="ghost" 
                        className="text-amber-400 hover:text-white"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Back
                    </Button>
                </div>

                {/* Main Profile Content */}
                <div className="p-8 md:p-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                        <img
                            src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${encodeURIComponent(trainer.name)}`}
                            alt={trainer.name}
                            width={128}
                            height={128}
                            className="h-32 w-32 rounded-full object-cover border-4 border-amber-400"
                        />
                        <div className="text-center md:text-left flex-1">
                            <h2 className="text-3xl font-bold">{trainer.name}</h2>
                            <p className="text-xl text-gray-400">{trainer.title}</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                                {trainer.specializations.map((spec, i) => (
                                    <Badge key={i} className="bg-gray-700 text-gray-300">{spec}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 space-y-6">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-amber-400">Bio</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">{trainer.bio}</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-amber-400">Experience</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                <li><strong>Years:</strong> {trainer.experience}</li>
                                <li><strong>Company:</strong> {trainer.company}</li>
                                <li><strong>Role:</strong> {trainer.role}</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-amber-400">Key Achievements</h3>
                            <ul className="space-y-2 text-gray-300">
                                {trainer.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start">
                                        <Star className="h-4 w-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Framer Motion Animation Variants (unchanged)
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const Team = () => {
    const [selectedTrainer, setSelectedTrainer] = useState(null);

    const managementTeam = [
        {
            name: 'Rajesh Gupta',
            role: 'Founder & CEO',
            image: 'data:image/jpeg;base64,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',
            experience: '20+ years in Tech Leadership',
            bio: 'Former VP of Engineering at Microsoft India. Led teams of 200+ engineers building enterprise products.',
            achievements: ['Founded 3 successful startups', 'Published 50+ research papers', 'Mentored 1000+ developers'],
            linkedin: 'https://linkedin.com/in/rajeshgupta',
            company: 'Microsoft India',
            title: 'Founder & CEO',
            specializations: ['Strategy', 'Leadership', 'Product Development']
        },
        {
            name: 'Meera Sharma',
            role: 'Head of Curriculum',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmLCJ9NRkrtmMxz4MyWoMif6BLvqpKII31Q&s',
            experience: '15+ years in Education Technology',
            bio: 'Former Education Director at Amazon. Designed learning programs used by millions of students globally.',
            achievements: ['Designed curriculum for 10+ tech companies', 'Author of "Modern Programming Education"', 'Speaker at 100+ conferences'],
            linkedin: 'https://linkedin.com/in/meerasharma',
            company: 'Amazon',
            title: 'Head of Curriculum',
            specializations: ['Curriculum Design', 'EdTech', 'Instructional Design']
        },
        {
            name: 'Amit Patel',
            role: 'Head of Placements',
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEBUSEhIVFRUQFRAVFRUVFRUQFxUVFRUWFhUXFxUYHSggGBolHRcVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQGi0lHh0rLSsrKy0tLS0tLS0rLS0tLS0tLS0tLS0rLSstLS0tLS0tLS0tLS0tLSstLTctLTcrK//AABEIAPYAzQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwEGAAQFBwj/xAA6EAABAwIEAwYFAgYCAgMAAAABAAIRAyEEBRIxBkFREyJhcYGhBzJCkbFSwRQjYoLR8HLx4eIzNEP/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAJREAAgIBBAICAgMAAAAAAAAAAAECEQMEEiExQVEFIhNhIzJC/9oADAMBAAIRAxEAPwDXDbpgaiARgL0hxwQFkJgaiDUAKDUbWpjWJjWJNjEhqnStjQs7NIBAaj0puhFoSARpUhqfoUOgbkDzMflFjFhqnSsFdn62/cJrIOxB8iCkmmFCtKnSnaFOhFgIDVOlO0qdKLGIgrIKfpQ6UAKgqITtKjSmIVCghM0rIQAqFhTCEJCANIBG0I9CJrVKyIICJrUYYja1KxgtamBqJrUbWpWOhYaiDUwNRaUrGLDVrZjjqdBmuo4AcupPQBJz/OGYWnqI1Pdamzm537DxVQGGqV39riHS4/KzdrPABY9VrI4F+zVptJLO+OjoVc/rVrUh2TD9Ru4jwSW4LVd73OPiStylh9PQRyiT6JzQJtsbSbLg5tZlyPlnfw6LFjXRpty9qh+AeDLHER0MW5LpsHPqtkN9wqI5pp9stnhg10czC5tXpmHjtAPRwHnzVgy/HU6zZYfNps4eYSTgmvEEbrmVsrfRfradLhs7kfB3gutpvkJLifKOTqdDHuHDLHCmFr5XjRWabaXts9vQ/wCFu6V2U01aOQ006YqFBanaVGlAhJaohOLVBamFCCEGlPLUJagBJCiE7So0p2I1wxG2mnhiIMRYUJDEYYmhiMMSbHQprEQam6FgalYCw1KxuJZRpuqvMNYJPj0HqtsNVY4ycX1KND6f/leOsGGA+slV5sqxwc34LcON5JqC8ldosqYiscTVHed8jTsxnIDxXboZXPekielvum4amOi6tFll5PLllkk5PyerxYY44qKNX+BtYmQtatgjP+ZF/Rd5tJDUoeCrVllo49Gg7mmhlxzFvutwUUvZCG+TYw7U2pTnnNikUay3qNRp5K+DM2SJWcYTSqCtTF2/M3bW0bg+XJWfDVG1GNe3ZwBH+Fxc8ZoLXDaUXCGIkVKX6Trb4A7j7rsaHP8A4Zxtbhr7o7mlQWJ+lCWrqWc0QWqC1OLVBagBBYo0J+lRpTsBBYhLVsFqjSgBWlEGooRAIAgNRBqIBTCABhSGogEYCQxelU7NX6sXVP6dLB/aJ/JV2AXn2HcXue79T3n3XN+UnWGvbOj8XC8t+kdXDtXWwzbLQw7F1MNStt7rzp6GT4NhoEJnZqGUyDYe6Nr+qsSKmaj6Y+y5uMfC6dU7rkYpvjuossga4rXW7h61lySCCm0q8JxYTRv5lVDqZaRJgwubwfbFR1pun2TDiAbH0Pis4WtjI6tet+jf8sTmaxfxsucIS1OhQWr0BwqEFqgtTi1QWosBWlDCdCEtTsQotQkJxCEhMBUKQ1MDEQYiwFhqMNTWsRtYotghQYiDU7Qp0JWOjXqCGuPRrj9mledZWO4P95rtZxxxSo9oDpga6bR3pLo5QqZhs7Y9oFNtR876WGJG+8LkfIzWSK2+GdjQQeGUt3lIv2Gp2F911cKzxFlQH45pb3m12GP029nJOC4m7I3qF224II9XBctYzpPJ7PUGsHX9lIpqn5bxZTqn5gLwBt7LvHNGhtnwSn12Or6Nx1PdcnFMuudiuI2tcRqmOir2YcWOJhsRO5cNh4Sltcuh71HtloqYadlxsbRcCZEQuI7iOr+qI53XQwPENOs0tqVWahtJa2fC6f42ReZMZQrAmD4eOy6fDH/3W+If+Fy6ODvJI0kTqkEeUhdThnEA4mnEWL9TuUALVpeMiMurp42XvSoLUVKq13ykHyujLV3lJPo4Li12JLVBanFqiFIQiEJC2NKDSgQgtQkLYLEJanYEBqMMTA1GAlYxYYjDEwBEGqNgLDVOlN0qQEmxnk3F/D9MirLTqBe5pBIh3Iqt4eoWYekRI/lg2tuTIPjK9Q4zw25HNknzComWYEPPZO+gkjn/AC3GQR5Ekei4OdbZSj+z0MPvGE15RX6eMqPcWtEugkAnS0RfcCXOP2SaFetWeGCm0ENJMyGiB1JPur9iOHCBqYA4jk7un0cBHstduCxDhp7NrRO7iHH2F1SssfRJ4ZN9lIxlEmmXtaW1GvY0ECLkxy3XcxfB2MZRNQ4lktGogFwJtMT/AOF3aOW9pi6VAuL+wcKtc8mu+imBtO59FbOJaAFB1tx7JubSHDCm2eK4OSwPdLiQSSe9fpC3amXVhQbiSGtplzQe6Kjmg/U5o28l1clwjWVHUyCHDvt/qad48l134eo2YGprukXHiNipPIkyCwNx7KZQzasJJEsb9QBZYmAdPj05KcbVbUpuJAMtJmBIIVmGVPqd0UiAd5AY31jwWvX4ZLO6CJqHSGgHndxjoAEKcbIvFJLk5HDuSOfpGojXBDQSAPGF0MXTGHraAT3SSTMX57LuZXRFFw7rADs5pLgRymdjbZcDiEE4gdHzvbmm5XyKMKaOtwnmGIqYynpqOA1AaeWmb2Xr5aqB8OMtBquqxZggeZXocLp6GLWO/Zg+QknkS9IVpUQmkKIW2zAKhQWpulRCLASWqC1OIUEJ2IwNRhqkBGAo2MENRAKQEQSbGQAp0qYRKNgVXjIENcYsWKuUcEHUxFiNuUdbq2cd0S7BuLfoLSf+M3VQwGPAGjmAuLrouOS15O/oJ78ST8HQw2CrhvdrsYByLS6fO91zsdia5cKTa4JdaGMDTfpeyTmWcOtTp3e77DqStnKWU6A1udreINR258fRZLZsqKO1w9lwpEMDfkN+ZLjcuJ5m66XE9HUNI2hcvLMyY4uLXAyZsdlsY/MJFzspLqhVzwU/McHqdoa066QBa9tnN9eiflmIrOESHEeAn18UNLNWCtUcTaL+i0csxQqFxpu0ntHlp2FzsQlyPizv1a9YC8jyY38ytJ7i53MODYa90ADmQANp6p+FzZxlj7ObuP3HUFaGaYsXExP4Stj2xNOrVOqXW1k6hyDxuR52Sc+rB/Zgbi45meaDt9YJmYWYTGNbWpuvrHyz8tz+VONvhFDqz0ngBkYY2jvndWWEGBw4ZTa0DlJ8SeaeQu9ijtgo+jgZ578kpexcKCEelZCtspFwhhMhRCdgLIUQmQoKdiDhSAphSAoWMyFIUwpASsZEIoUwphKwObn1DXhazRuab48wJ/ZeVPoyGObu5sH7A/uvZ9P7z5GxXkmZ4Y4etUon/wDN5LfFjrtI/Houbr4tpSOr8bNJyi/JWmzSc5zyZm8/sujRxxe2LXBnYW6eYT8ww7XwSNyBPqufjuG9BbUpufAc0vYDJLOcLBGmb2pRZpnCVqFXXRmDHdBkOm9xsCk5vxNVI0Br2u5yF6FQ4TY9mqjiHiGB2mz+8RLZ5gLm4vhXFaoPZkm5dHturL9or3LpOjzSjhKrzfVfxK7mXO7EAchurJV4RrBge+q1okggNgAdZPNVKngKldx7NxFNvzPIgEzsJTu+yMeH9eWbWJzPUQLkjYi59CEeOoPPZl0gvLY8pW1lWUtFQC/Ikm0+C2cxqCpigB8tEekqptXSLYxdfY0qQ0OIneZVr4G4eq4hrar20zhy4kE3fLT9PQKkY7Ed5xHj7r2bgms2lgMO15DZGlpNgSbrXpYJy5MmryOK+pY4UQmQohdWzjgEKIRkKIRYC9KgtTIUEKSYC4QkJsKC1OxEwiAWaUQCjYyIUgIg1EAo2AMIgFMKYSsZEKm/EfJXVKbcVSEvw4Ie0C76X/rJPqroAp0/9G4Ph5bqE0pJplkJODUkeEYDFaja8XE8z1XVr1CQBMO3bA9kHF2RjBY4BtqGJ1OpH9Lt3sn38lGIpOfT7pAc2L/hcbJDZOjvYcv5I7jZynDNe43FOpABMlge39JI6TK79Y4qNXbshoLRJYRP2uqP/G1mfSDBgyB94S35s8z3DbblceCa6JycW+UPzlznOLKtZ9YF+vTqhmryHJDSJs0wAI7osJA2hadXEPc46RceHLzTqNFwu7nv09PFRY7XSXA/FYsU2l/MCPVV1+O0MJnvPMnwWZ7mGohuwB+8bLkElxuVZDH7M2TNbqJv5VQdXrNYPqIXtnFWDY3KXsJjs2Nc0ixD2wQR6qkfDXJDJxDxbZv+V2fipmunDNpA3qEfZaMad8GXJ/Xks/Aee/xWFbqP8ymId4+KssLwPhXOnYZ4e07RI3Dh0XuGS5ozE0hUYd9xzBXQTOa1RtwoLUyFEJ2IXpQwmwhITTAWQohMLVEJ2IKEQCkNRAKFkiAFMIggqVmt3IEJDChTCrea8b4SgSHVWyOQMlVLNfioNqFMnoXWCltfkVrwenvqhu5AVfzjjPCYeddVs9GkErxrN+KsVXnXVIB+ltlycBgn4mvTotuarg2bkxzKT2x/Y0mz1rP8zp4/Ln1XMLWNOqk42cHDYgdCqtkeYyGBwF2x5kWKvHGWWto5cKLBAptA84C8rFMljXtMFk+R81y9Q98uTraVOEeC6tpUybxtItBj15pNbAMJEWHM7yB+Cqs3PC096RJsDe/P0RVc9beCb7zt4rMoSRs/LFnd7NjTytP26rgZxmIg7Q0x4g7ifBa2NzguJDfDyXKxDi494jpa0gbT1hThjp2yrLm3KomhBeST6fsrNwjwy7FVJIikw993XwHip4S4fdjK3ZtsxkGq/k0dJ6naPFew4fAU6NMUaTQ1jfuT1JWhKzLdGvQohjQ1ohrQAAOi8p44zE1sU4TIpd0efNesZvXFGg+oT8jSfXkvDqlQvc5x3cS77rTij5M+aXgPDHfyVo4Wzyph3EsdEwS03BVXo/kLZw1WI+y0oys9kybjqjUhtX+W7x+X7q1UqjXiWkEHmF88U8VyJXWyfiirhnTTeSObXXBTpET3OFBCrfDPGFLEtDXxTqdCbHyVmhLoBZCjSmlqEhFhRLiBcqt59xph8LZzwXfpbcrh/E3iw0GihSP8x8yR9I6rx57i5xc4kk7k3KfC77BW+uj0fM/iq4gijSPm4/tCqOacT4rE/PUIB+ltguO1iaGo3Me1ABv36oi6AilJfuojBcvRfgjk/aYirinDu0AGM/5m59iF5w+eS99+FzadPLWNZE3e89XH/Qqsj4LcatmzxrT10nNHMEryHJqctew9SvaMZTNTUT0XmQyp1Gq+RALiR5Lnai0dTTeitY3CQSubUdpsrpmWHBElVvEYUSqlPgtlj9HJdWKfkuT1sZiG0KIlzruO4Y3m4rt5LwvVxbopthoI11Xd1jRzvzPgF7PwtkWGwWH0YchxMdpU+p7vHoPBX41uM+R7eDSybJKWCw7cPRG0a3c3uNyStynSWxUu5DUMCdgLlaUjOzz74n5lppigN3953g1easNzYbLtcTZp2+Jq1IsTpb5NsuTTPeFhcELTGNIxylbMom42U6j9ioD+nIoqwMn/AKUyJjXjmEtzxO3upbY7DZQ119ggDcwWN0nb32V6yTi6rSAAdraI7rt/Ry85ZUvy3W1h8YAbgb+Safsi0e35bxhRqEB4NNx/Vt91YWuDhIIIPNeDMzEERf8AK3aGdVWCGVnNHQOIRtTC2VriHMHYjF1arjMuIb/xBgLRDVDTc+aYFF8uyaVIkMUwsAWF0JgTKA07qQESTATAler8A5r/AA+EY1zdWsmwvAXlVEL3DgPI2twjHOHecJvyVOXqi7F2WHD1BUjQZBEwbEeBXN4ny8dlMXbz6o8ywrmEOpktI5jn5hOpYl1emadQd6ItsfFZ5RtUaoNp2UB2HL4AEk2C7uC4cw9NoNWiKtT6tZJYD0DAYK3Miy4sxQY4fJqInpy/KtdTDNdyCz6fF22aNRlbpIrDyXACIa3ZrQGMH9ostZtd9N2pnlHUePVd7GsA7rRusw+XCLhaTKRhqgc3UPq9uoXG47zLsME8j5qn8tsf1b+y6/8ADuY6Wi3MLzT4n5t2uIbQaSBRbcci90z9grMatlWV1EpejmDYbDqga2CLbXKmrYx05hMY8xFjNytRlE1agBOwCQ/Fa/kBdAuTYBPq4ZjyHHr8pMD1RiACNA3RQWKw8iZgm3+hGypflsiDt+6PuoY43s3ZAA06ptcfZQKp8N+iOm42+VC2of6dykAQrb2HpZP7cdCP7lqufc2G6iq8T8vumFCmG580wBJp7lMcEhjEBMogVkpiIeeSB+yIGSSgfuAkM3Mow+upTZ+p7R7r6TyvDBlJjB9LQF4TwBgu0x1L+gz9l9AU1TkfJdiXk18Th5Wp/C6TqG4XUehiypLzSse9HeiJ8ED6sBZUPILKNAuvyQhsDCUNR1FdF7IRsZAhQBJTELqubTpue7ZjXOM9Gif2XzhmeJNarUrm/aPc7yB29l7N8WMzNHL3Umnv4oin/bu/2BHqvC3ugwLQrsa4szZXboKiL+5BR91x/ST9lDn93bvO5pNDERIO+0K6ykfUaek8gUuo+BvIbcyiY6LgxHXqVrYhwc5rCI5uI9ghghtF3dJLd/FMY4Qe6hBZBud1LS2DugCWPv8AKNlDXCR3RzWMLZ57IaemRvzQMgkT8vNRULZPdKwaep3UP0ye8kApjblFeUPUomG6BjA7qgRkIWx0QBOuAUumJcpc+yzDtklAHp3wfwE1H1jy7oP5XrTVR/hTg9GCDiLvJPurws03bNMFSJcl1XQ1GtfEN1EN5c1EsNVokgnY/wCyui0wIGyWcLJ3ttGy2dIFkldiYIUtCwrXzLGNo0X1XGBSY559NvdMTZ418W827XHdmCdOFaGeBqOhzz+AqOx3I3G8p+OxjqtR1Rxk1Hve6erjP+AlMAi1ieS1JcUY27dhRN28+RS61NptsR+UTQRc8toUsfO9wLpgS4gCHCzRJK1sK2RrJA1kn05BRiu9DGzL/mHRu5ThSgN7qYBkd35huoAse8EOg6flG6wMMHuoAJrb/MNlDG3HeGxUBhv3RshYwyO7yQBmk2uDfwSK7nBxgAojbkUeGsCZ3M9UgFoqZk35INSOm2QkMOEOoQscYCzSITAF7rBHg2EmI3IH3S6hv5LscK4btMVRZO7x7XSA974YwvZYWkzowe66pQUWw0DoAFJKys2LoIKGtvKyeSNiAYwIZRhK5oEGVRvi5m3Y4EUmkasS8Nj+hvecrwV4Z8V82FbMDT+nDNFMHo43f72U4K2QyOolOMON7Hc9FNRp6eAKHSQOsqaLiDI5citBmD1wIFwNwsdp2+U7lQ3STex6pGLJiP1mJ8AgAKdyXkm9hHQLYedvmUveRaRYQhfVda4TAHVbc7qZse8d1PaOgXG6LtTB23QAvVvfkha6473JN7Q3sNko1j+kbJAalSoSQAdymuZfZIwz5cXWGkflMNT+opDD1XKNqxYgAyZUluyxYmAp1irp8LqWvHtmO41x9VixRl0Sj2e5OMKGrFizGsJia1YsQJhhL5qViBITja/Z03P30Ne77A/4XzLiqrqjnVHGTWc97pvdxk/lYsVuIpzdixeSLQjc6YaQsWK4pBeNIvfUkUyCSSOjR4RcrFiAH1y3pySi5trLFibBBgNIbbmsDRpO6hYkDM0NvvstaoB47LFiGCE5cRodLQZJ3THvH6QFixRGf//Z',
            experience: '12+ years in Talent Acquisition',
            bio: 'Former Global Recruiting Director at Google. Built recruitment processes used by top tech companies.',
            achievements: ['Placed 5000+ candidates in tech roles', 'Built hiring processes for unicorn startups', 'Industry recognition for diversity in hiring'],
            linkedin: 'https://linkedin.com/in/amitpatel',
            company: 'Google',
            title: 'Head of Placements',
            specializations: ['Recruitment', 'Hiring Strategy', 'Talent Management']
        },
    ];

    const supportTeam = [
        {
            name: 'Student Success Team',
            description: 'Dedicated support staff ensuring every student succeeds',
            count: '15 members',
            image: 'https://media.gettyimages.com/id/1149898909/photo/high-school-classmates-high-five-each-other.jpg?s=612x612&w=gi&k=20&c=0XLOvBU1ILpksmjxM2El7jeRGXjFpTogRUPcqjcLCFQ=',
            icon: Users
        },
        {
            name: 'Technical Support',
            description: '24/7 technical assistance for all learning platforms',
            count: '8 members',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFxAsepjsvZ1-1fK-r0U3RPUKWdOrIDT6Ugt4HpTXbihT5MJlCckd8g6RAxB5yB6AhZhA&usqp=CAU',
            icon: MessageSquare
        },
        {
            name: 'Career Counselors',
            description: 'Expert guidance for career development and job search',
            count: '6 members',
            image: 'data:image/jpeg;base64,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',
            icon: Award
        }
    ];

    const MockTrainerProfile = ({ trainer, onProfileClick }) => (
        <Card className="flex flex-col flex-1 bg-gray-900 border border-gray-800 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
                <img
                    src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${encodeURIComponent(trainer.name)}`}
                    alt={trainer.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover border-2 border-amber-400"
                />
                <div>
                    <h3 className="text-xl font-semibold text-white">{trainer.name}</h3>
                    <p className="text-sm text-gray-400">{trainer.title}</p>
                </div>
            </div>
            <p className="text-gray-300 text-sm mb-4 line-clamp-3">{trainer.bio}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {trainer.specializations.map((spec, i) => (
                    <Badge key={i} className="bg-gray-700 text-gray-300">{spec}</Badge>
                ))}
            </div>
            <Button onClick={() => onProfileClick(trainer)} className="w-full bg-amber-400 text-black hover:bg-amber-500 mt-auto">
                View Full Profile
            </Button>
        </Card>
    );

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <Navigation />
            <main>
                {/* Hero */}
                <section className="relative py-20 text-white overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Team collaboration"
                        className="absolute inset-0 z-0 w-full h-full object-cover brightness-[.2] opacity-80"
                    />
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                            Meet Our <span className="text-amber-400">Expert Team</span>
                        </h1>
                        <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
                            Industry veterans and education experts dedicated to transforming your career
                            through world-class technical education and mentorship.
                        </p>
                    </div>
                </section>

                {/* Leadership Team */}
                <section className="py-16 bg-gray-950">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Leadership Team</h2>
                            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
                                Visionary leaders with decades of experience in technology and education,
                                committed to building the future of tech talent.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {managementTeam.map((member, index) => (
                                <Card key={index} className="bg-gray-900 border border-gray-800 text-white rounded-lg shadow-lg hover:shadow-amber-500/10 transition-all duration-300 group">
                                    <CardHeader className="text-center">
                                        <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                                            <img src={member.image} alt={member.name} width={128} height={128} className="w-full h-full object-cover" />
                                        </div>
                                        <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                                        <Badge className="bg-amber-400 text-black hover:bg-amber-500">
                                            {member.role}
                                        </Badge>
                                        <p className="text-sm text-gray-400 mt-2">{member.experience}</p>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-sm text-gray-300">{member.bio}</p>
                                        <div>
                                            <h4 className="font-semibold text-sm mb-2 text-white">Key Achievements</h4>
                                            <ul className="space-y-1">
                                                {member.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                                                        <Star className="h-3 w-3 text-amber-400 mt-0.5 flex-shrink-0" />
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" size="sm">
                                            <Mail className="h-4 w-4 mr-2" />
                                            Connect
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Teaching Faculty */}
                <section className="py-16 bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Teaching Faculty</h2>
                            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
                                Learn from industry veterans who have built systems at scale and are passionate about sharing their knowledge.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {trainers.map((trainer, index) => (
                                <MockTrainerProfile key={trainer.id} trainer={trainer} onProfileClick={setSelectedTrainer} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Support Team */}
                <section className="py-16 bg-gray-950">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Support Team</h2>
                            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
                                A dedicated support ecosystem ensuring your success every step of the way.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {supportTeam.map((team, index) => (
                                <Card key={index} className="text-center bg-gray-900 border border-gray-800 text-white rounded-lg shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
                                    <CardHeader className="p-0">
                                        <div className="w-full h-32 overflow-hidden rounded-t-lg mb-4">
                                            <img src={team.image} alt={team.name} width={400} height={128} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="px-6">
                                            <CardTitle className="text-xl">{team.name}</CardTitle>
                                            <Badge variant="secondary" className="bg-gray-700 text-gray-300 hover:bg-gray-600">{team.count}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="px-6 py-4">
                                        <p className="text-gray-400">{team.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Join Our Team */}
                <section className="py-16 bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Join Our Team</h2>
                        <p className="text-base sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                            Are you passionate about education and technology? We're always looking for talented individuals
                            to join our mission of transforming careers through quality education.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                            {[
                                { role: 'Senior Python Instructor', type: 'Full-time', location: 'Bangalore' },
                                { role: 'Java Architect Trainer', type: 'Full-time', location: 'Hyderabad' },
                                { role: 'Career Counselor', type: 'Part-time', location: 'Remote' }
                            ].map((job, index) => (
                                <Card key={index} className="bg-gray-950 border border-gray-800 rounded-lg shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-white">{job.role}</CardTitle>
                                        <div className="flex gap-2 justify-center">
                                            <Badge variant="outline" className="text-gray-400 border-gray-600">{job.type}</Badge>
                                            <Badge variant="secondary" className="bg-gray-700 text-gray-300 hover:bg-gray-600">{job.location}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <Button className="w-full bg-amber-400 text-black hover:bg-amber-500">
                                            Apply Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                            <Mail className="h-5 w-5 mr-2" />
                            View All Openings
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Render the modal if a trainer is selected */}
            <TrainerProfileModal trainer={selectedTrainer} onClose={() => setSelectedTrainer(null)} />
        </div>
    );
};

export default Team;