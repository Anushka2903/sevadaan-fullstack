import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { X, Calendar, MapPin, Users, Heart, ExternalLink, Award, CheckCircle } from 'lucide-react';
import { Program } from '../../types';
import { Button } from '../ui/Button';
import { StatusBadge } from '../ui/StatusBadge';
import { ProgressBar } from '../ui/ProgressBar';

interface ProgramDetailsModalProps {
  program: Program;
  isOpen: boolean;
  onClose: () => void;
}

export const ProgramDetailsModal: React.FC<ProgramDetailsModalProps> = ({
  program,
  isOpen,
  onClose
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Flexible';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const handleDonate = () => {
    onClose();
    navigate(`/programs/${program.id}/donate`);
  };

  const handleVolunteer = () => {
    onClose();
    navigate('/volunteer');
  };

  const ngoId = program.ngoId || (program as any).ngo?.id || (program as any).ngo?._id;
  const ngoName = (program as any).ngoName || (program as any).ngo?.name || 'Partner NGO';

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header with Background Gradient */}
        <div className="relative bg-gradient-to-r from-primary-700 via-primary-600 to-indigo-700 text-white p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="pr-10">
            <div className="flex items-center gap-3 mb-2">
              <StatusBadge status={program.status} variant="solid" size="sm" />
              {(program as any).category && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20 text-white">
                  {(program as any).category}
                </span>
              )}
            </div>
            <h2 id="modal-title" className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
              {program.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1.5 text-accent-300" />
                <span>{program.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1.5 text-accent-300" />
                <span>{formatDate(program.startDate)}{program.endDate ? ` - ${formatDate(program.endDate)}` : ''}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* Program Image */}
          <div className="h-60 rounded-xl overflow-hidden bg-slate-100 shadow-inner">
            <img 
              src={program.imageUrl || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80'} 
              alt={program.title}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80';
              }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-1">Location</span>
              <p className="font-semibold text-slate-800 text-sm truncate">{program.location}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-1">Status</span>
              <p className="font-semibold text-slate-800 text-sm capitalize">{program.status}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 col-span-2 sm:col-span-1">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-1">Beneficiaries</span>
              <p className="font-semibold text-slate-800 text-sm">
                {(program as any).currentBeneficiaries || program.currentParticipants || 50}+ Served
              </p>
            </div>
          </div>

          {/* Participation Progress Bar */}
          {program.capacity && program.currentParticipants !== undefined && (
            <div className="bg-primary-50/60 p-4 rounded-xl border border-primary-100">
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="font-medium text-primary-900 flex items-center">
                  <Users className="w-4 h-4 mr-1.5 text-primary-600" />
                  Program Capacity & Participation
                </span>
                <span className="font-bold text-primary-700">
                  {program.currentParticipants} / {program.capacity} spots filled
                </span>
              </div>
              <ProgressBar 
                value={program.currentParticipants} 
                max={program.capacity} 
                variant={program.status === 'completed' ? 'success' : 'primary'}
              />
            </div>
          )}

          {/* About Program */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">About This Program</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
              {program.description}
            </p>
          </div>

          {/* Eligibility Criteria */}
          {program.eligibilityCriteria && (
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="text-sm font-semibold text-slate-800 mb-1 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                Eligibility & Requirements
              </h4>
              <p className="text-slate-600 text-sm">{program.eligibilityCriteria}</p>
            </div>
          )}

          {/* Organization Info Card */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider block mb-0.5">Organized By</span>
              <h4 className="font-semibold text-slate-900">{ngoName}</h4>
            </div>
            {ngoId && (
              <Link 
                to={`/ngos/${ngoId}`} 
                onClick={onClose}
                className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm transition-colors"
              >
                <span>View NGO Profile</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="border-t border-slate-200 p-4 bg-slate-50 flex flex-col sm:flex-row gap-3 justify-end items-center">
          <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">
            Close
          </Button>
          <Button 
            variant="accent" 
            onClick={handleVolunteer}
            leftIcon={<Users className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Volunteer for Program
          </Button>
          <Button 
            variant="primary" 
            onClick={handleDonate}
            leftIcon={<Heart className="w-4 h-4" />}
            className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 border-none text-white"
          >
            Donate to Program
          </Button>
        </div>
      </div>
    </div>
  );
};
